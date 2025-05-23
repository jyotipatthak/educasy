import React, { useState } from 'react';
import CourseHero from '../components/course/CourseHero';
import CourseCurriculum from '../components/course/CourseCurriculum';
import ModuleBreakdown from '../components/course/ModuleBreakdown';
import Stats from '../components/course/Stats';
import Reviews from '../components/course/Reviews';
import Like from '../components/course/Like';
import ContactInstructor from '../components/course/ContactInstructor';
import Notes from '../components/course/Notes';
import WhyEnroll from '../components/course/WhyEnroll';
import '../components/course/course.css';
import CourseProgress from '../components/course/CourseProgress';
import Header from '../components/Header';



const CoursePage = () => {

    const [selectedModule, setSelectedModule] = useState(0);
    const course = {
        id: 0,
        title: "Practical AI: Hands-On Learning",
        description: "Learn AI by building models and applying concepts in real-world scenarios. Gain hands-on experience with Python and popular AI frameworks like TensorFlow and PyTorch.",
        status: "Ongoing",
        duration: "20 hours",
        modules: [
            {
                title: "Introduction to AI",
                breakdown: [
                    { title: "What is AI?", type: "video", link: "https://example.com/intro-to-ai" },
                    { title: "AI Applications in Real Life", type: "video", link: "https://example.com/ai-applications" },
                    { title: "History and Evolution of AI", type: "quiz", link: "https://example.com/ai-history-quiz" },
                ]
            },
            {
                title: "Data Handling for AI",
                breakdown: [
                    { title: "Data Preprocessing", type: "video", link: "https://example.com/data-preprocessing" },
                    { title: "Handling Missing Data", type: "project", link: "https://example.com/missing-data-project" },
                    { title: "Exploratory Data Analysis (EDA)", type: "quiz", link: "https://example.com/eda-quiz" },
                    { title: "Data Normalization Techniques", type: "video", link: "https://example.com/data-normalization" }
                ]
            },
            {
                title: "Machine Learning Essentials",
                breakdown: [
                    { title: "Supervised vs Unsupervised Learning", type: "video", link: "https://example.com/supervised-unsupervised" },
                    { title: "Building Your First Model", type: "project", link: "https://example.com/first-model-project" },
                    { title: "Evaluating Model Performance", type: "quiz", link: "https://example.com/model-performance-quiz" }
                ]
            },
            {
                title: "Neural Networks and Deep Learning",
                breakdown: [
                    { title: "Introduction to Neural Networks", type: "video", link: "https://example.com/neural-networks" },
                    { title: "Building a Deep Learning Model", type: "project", link: "https://example.com/deep-learning-project" },
                    { title: "Hyperparameter Tuning", type: "quiz", link: "https://example.com/hyperparameter-quiz" }
                ]
            },
            {
                title: "AI in Practice",
                breakdown: [
                    { title: "AI for Image Recognition", type: "video", link: "https://example.com/image-recognition" },
                    { title: "AI for Natural Language Processing", type: "video", link: "https://example.com/nlp" },
                    { title: "Deploying AI Models", type: "project", link: "https://example.com/model-deployment" }
                ]
            }
        ],
        stats: {
            enrolled: 10235,
            videos: 15,
            projects: 5,
            quizzes: 10,
            completionRate: 92
        },
        instructorId: 0,
        reasonToEnroll: [
            "Learn from industry experts with hands-on projects and case studies.",
            "Master AI concepts and tools like Python, TensorFlow, and PyTorch.",
            "Work on real-world projects to enhance your portfolio and career prospects."
        ],
        additionalResources: [
            { title: "Python for AI Beginners", type: "ebook", link: "https://example.com/python-ebook" },
            { title: "TensorFlow Documentation", type: "link", link: "https://example.com/tensorflow-docs" },
            { title: "AI Community Forums", type: "community", link: "https://example.com/ai-forum" }
        ]
    };
    

    return (
        <div className='course'>
            <Header />
            <CourseHero course_details={course} />
            <CourseCurriculum onSetSelected={(moduleIndex)=> { setSelectedModule(moduleIndex)}} title={course.title} modules={course.modules} />
            <ModuleBreakdown module={course.modules[selectedModule]} />
            <Stats stats={course.stats} />
            <CourseProgress />
            <WhyEnroll reasonToEnroll={course.reasonToEnroll}/>
            <Reviews courseId={course.id} />
            <Notes courseId={course.id}/>
            <ContactInstructor instructorId={course.instructorId} />
            <Like courseId={course.id}/>

        </div>
    );
}
export default CoursePage;