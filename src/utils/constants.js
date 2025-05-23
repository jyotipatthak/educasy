export const AD_AFTER_VIDEO = 'adAfterVideo';
export const VERSION = 'version';
export const REFRESH_TOKEN = 'refreshToken';
export const LOGOUT_TOKEN = 'logoutToken';
export const AUTH_SCREEN = 'authScreen';
export const REWARDS_DATA = 'rewardsData';
export const BASE_ENV = 'ENV';
export const BASE_URL = 'URL';
export const REFERRAL_CODE = 'referralCode';

// constants.js

export const ENDPOINTS = {
    // Search
    SEARCH: "/search",

    // Articles
    GET_QUIZZES: "/quizzes",  // To fetch a list of quizzes
    GET_QUIZ_DETAIL: (articleId) => `/quizzes/${articleId}`,  // To fetch a particular article by ID
    FOLLOW_QUIZ: (articleId) => `/quizzes/${articleId}/follow`,  // To follow an article
    LIKE_QUIZ: (articleId) => `/quizzes/${articleId}/like`,  // To like an article
    COMMENT_QUIZ: (articleId) => `/quizzes/${articleId}/comment`,  // To post a comment on an article

    // Blogs
    GET_BLOGS: "/blogs",  // To fetch a list of blogs
    GET_BLOG_DETAIL: (blogId) => `/blogs/${blogId}`,  // To fetch a particular blog by ID
    FOLLOW_BLOG: (blogId) => `/blogs/${blogId}/follow`,  // To follow a blog
    LIKE_BLOG: (blogId) => `/blogs/${blogId}/like`,  // To like a blog
    COMMENT_BLOG: (blogId) => `/blogs/${blogId}/comment`,  // To post a comment on a blog

    // Courses
    GET_COURSES: "/courses",  // To fetch a list of courses
    GET_COURSE_DETAIL: (courseId) => `/courses/${courseId}`,  // To fetch a particular course by ID
    FOLLOW_COURSE: (courseId) => `/courses/${courseId}/follow`,  // To follow a course
    LIKE_COURSE: (courseId) => `/courses/${courseId}/like`,  // To like a course
    COMMENT_COURSE: (courseId) => `/courses/${courseId}/comment`,  // To post a comment on a course
};


