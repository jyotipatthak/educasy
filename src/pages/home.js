import React from 'react';
import LinkedText from '../components/LinkedText';
import {HomeBackground} from '../components/Background';



const HomePage = () => {
    const available_links = [
        { text: "Blogs", path: "./blogs" },
        { text: "Courses", path: "./courses" },
        { text: "Quizzes", path: "./quizzes" },
    ]
    return (
        <div className='home'>
            <HomeBackground />
            <div className='app-content' >
                <h1 className='title center-text'>Educasy</h1>
                <div className='flexbox'>
                    {available_links.map((link, index) => <LinkedText key={index} link={link.path} text={link.text} />)}
                </div>

            </div>

        </div>
    );
}
export default HomePage;