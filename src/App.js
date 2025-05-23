// src/App.js

import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import SectionHome from './pages/SectionHome';
import CoursePage from './pages/CoursePage';
import QuizPage from './pages/QuizPage';

function App() {

    const isAuthenticated=true;

    return (
      <Router>
          <main>
              <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/courses" element={<SectionHome type="courses" />} />
              <Route path="/courses/:id" element={<CoursePage />} />
              <Route path="/blogs" element={<SectionHome type="blogs" />} />
              <Route path="/quizzes" element={<SectionHome type="quizzes" />} />
              <Route path="/quizzes/:id" element={<QuizPage />} />
              </Routes>
          </main>
      </Router>
    );
}

export default App;
