import React from 'react';
import LinkedText from '../components/LinkedText';
import { HomeBackground } from '../components/Background';



const Header = () => {
    const available_links = [
        { text: "Blogs", path: "/blogs" },
        { text: "Courses", path: "/courses" },
        { text: "Quizzes", path: "/quizzes" },
    ]
    return (
        <header className='space-between flexbox' >
            <h1 className=''>Educasy</h1>
            <div className='flexbox'>
                {available_links.map((link, index) => <LinkedText key={index} link={link.path} text={link.text} />)}
            </div>
        </header>
    );
}
export default Header;