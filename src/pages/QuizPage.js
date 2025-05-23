import React, { useState } from 'react';

import Header from '../components/Header';
import MCQ from '../components/quiz/MCQ';
import MSQ from '../components/quiz/MSQ';
import Match from '../components/quiz/Match';
import TrueFalse from '../components/quiz/TrueFalse';
import { QuizCarousal } from '../components/QuizCarousal';
import FillBlanks from '../components/quiz/FillBlanks';
import '../components/quiz/quiz.css';


const QuizPage = () => {
    const quiz = {
        id: 1,
        title: "Introduction to AI",
        description: "This quiz will test your knowledge of Artificial Intelligence, its concepts, and real-world applications. Learn the fundamentals of AI and its various branches.",
        status: "Active",
        questions: [
            {
                question: "What is Artificial Intelligence?",
                type: "MCQ", // Multiple Choice Question
                marks: 1,
                options: [
                    "A system that mimics human intelligence",
                    "A type of computer programming",
                    "A new programming language"
                ]
            },
            {
                question: "Which of the following are branches of AI?",
                type: "MSQ", // Multiple Select Question
                marks: 2,
                options: [
                    "Machine Learning",
                    "Data Science",
                    "Natural Language Processing",
                    "Quantum Computing"
                ]
            },
            {
                question: "Fill in the blank:",
                type: "FillBlanksFromOptions", // Fill in the blanks from options
                marks: 1,
                paragraph: "%_% AI %_% systems can learn from %_% and improve over time, without explicit programming.",
                options: ["data", "instructions", "rules"]
            },
            {
                question: "Match the following AI concepts with their definitions:",
                type: "Match", // Match Question
                marks: 2,
                optionsLeft: ["Supervised Learning", "Reinforcement Learning", "Neural Networks"],
                optionsRight: [
                    "Learning from labeled data to make predictions",
                    "Learning through trial and error with feedback",
                    "A series of algorithms designed to recognize patterns"
                ]
            },
            {
                question: "Fill in the blank:",
                type: "FillBlanksNoOptions", // Fill in the blanks without options
                marks: 1,
                paragraph: "%_% AI is a field of computer science that aims to create machines that can perform tasks that typically require %_%.",
            },
            {
                question: "AI is classified into which categories?",
                type: "FillBlanksFromOptions", // Fill in the blanks from options
                marks: 1,
                paragraph: "AI is classified into %_% categories: Narrow AI and General AI.",
                options: ["two", "three", "four"]
            },
            {
                question: "Which of the following is a popular framework for AI development?",
                type: "MCQ", // Multiple Choice Question
                marks: 1,
                options: [
                    "TensorFlow",
                    "JavaScript",
                    "Ruby"
                ]
            },
            {
                question: "Which task can AI NOT perform?",
                type: "MSQ", // Multiple Select Question
                marks: 2,
                options: [
                    "Play chess",
                    "Write novels",
                    "Feel emotions",
                    "Make real-time decisions"
                ]
            },
            {
                question: "True or False: AI systems can only operate in structured environments.",
                type: "TrueFalse", // True/False Question
                marks: 1
            }
        ]
    };



    return (
        <div className='quiz'>
            <Header />
            <div className="quiz-page app-content">
                <h1>Introduction to AI Quiz</h1>
                <QuizCarousal id="quiz" carousal_items={quiz.questions} item_html={(question, index) => {
                    switch (question?.type) {
                        case "MCQ":
                            return <MCQ key={index} question={question} />;
                        case "MSQ":
                            return <MSQ key={index} question={question} />;
                         case "FillBlanksNoOptions":
                             return <FillBlanks key={index} question={question} />;
                         case "FillBlanksFromOptions":
                             return <FillBlanks key={index} question={question} />;
                        case "Match":
                            return <Match key={index} question={question} />;
                        case "TrueFalse":
                            return <TrueFalse key={index} question={question} />;
                        default:
                            return null;
                    }}} />
            </div>
        </div>
    );
}
export default QuizPage;