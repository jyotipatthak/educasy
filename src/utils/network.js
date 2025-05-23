import axios from 'axios';
import LocalStorage from './LocalStorage';
import store from './store';
import actions from './actions';

const axiosInstance = axios.create({
  baseURL: store.getState().reducer.baseURL.trim(),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...headerAppVersion, // Assuming headerAppVersion is defined
  },
});

// Cache for token refresh state to prevent multiple simultaneous refresh attempts
let isRefreshing = false;
let failedQueue = [];

// Interceptors for handling Authorization and responses
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await NetworkApi.getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response, config } = error;
    if (response?.status === 401) {
      // Handle token refresh in case of 401 error
      return handle401Error(error, config);
    }
    return NetworkApi.handleErrors(error);
  }
);

// Function to handle 401 errors by refreshing the token
async function handle401Error(error, config) {
  const originalRequest = config;

  // Prevent multiple refreshes at the same time
  if (isRefreshing) {
    return new Promise((resolve) => {
      failedQueue.push({ resolve, originalRequest });
    }).then((response) => response);
  }

  isRefreshing = true;
  const isRefreshed = await NetworkApi.refreshToken();

  // Retry the original request after token refresh
  if (isRefreshed) {
    const newToken = await NetworkApi.getToken();
    originalRequest.headers['Authorization'] = `Bearer ${newToken}`;

    // Resolve all the requests that were queued during refresh
    failedQueue.forEach((promise) => promise.resolve(axiosInstance(originalRequest)));
    failedQueue = [];

    return axiosInstance(originalRequest);
  }

  // If refresh fails, log out the user and clear token
  store.dispatch(actions.signOut());
  NetworkApi.removeToken();

  return Promise.reject(error);
}

// Network API class
const NetworkApi = {
  // Cache token retrieval to avoid redundant calls
  async getToken() {
    if (this._token) return this._token;

    const token = await LocalStorage.getToken();
    this._token = token;
    return token;
  },

  // Store token in local storage and cache it
  async setToken(token) {
    this._token = token;
    await LocalStorage.setToken(token);
  },

  // Refresh token
  async refreshToken() {
    const refreshToken = await LocalStorage.getFromLocal(values.REFRESH_TOKEN);
    
    try {
      const response = await axiosInstance.post('api/refresh-token', { refreshToken });
      if (response?.data?.token && response?.data?.refreshToken) {
        await LocalStorage.storeToLocal('TOKEN', response.data.token);
        await LocalStorage.storeToLocal(values.REFRESH_TOKEN, response.data.refreshToken);
        this._token = response.data.token; // Cache the new token
        return true;
      }
    } catch (error) {
      console.error("Token refresh failed:", error);
    }

    return false;
  },

  // Handle general errors (e.g., 400, 404, 500)
  async handleErrors(error) {
    const { response } = error;
    const status = response?.status;

    if (status === 400) {
      throw new Error('Bad Request');
    }

    if (status === 404) {
      throw new Error('Resource Not Found');
    }

    if (status === 500) {
      throw new Error('Server Error');
    }

    throw new Error(response?.data?.message || 'An error occurred');
  },

  // Generic function for API requests
  async request({ method, endpoint, data = {}, config = {} }) {
    try {
      const response = await axiosInstance({
        method,
        endpoint,
        data,
        ...config,
      });

      return response.data;
    } catch (error) {
      await this.handleErrors(error);
    }
  },

  // POST request
  post(endpoint, data, config) {
    return this.request({ method: 'post', endpoint, data, config });
  },

  // GET request
  get(endpoint, config) {
    return this.request({ method: 'get', endpoint, config });
  },

  // PUT request
  put(endpoint, data, config) {
    return this.request({ method: 'put', endpoint, data, config });
  },

  // DELETE request
  delete(endpoint, config) {
    return this.request({ method: 'delete', endpoint, config });
  },

  // Remove token from local storage and clear cache
  async removeToken() {
    this._token = null;
    await LocalStorage.removeToken();
  },
};

export default NetworkApi;
