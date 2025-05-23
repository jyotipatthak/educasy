import React from 'react';
import LinkedText, { LinkedCard } from '../components/LinkedText';
import SearchBox from '../components/Search';
import { ENDPOINTS } from '../utils/constants';
import { SectionBackground } from '../components/Background';



const SectionHome = ({type}) => {
    const text =  type.charAt(0).toUpperCase() + type.slice(1);

    const apis = { "blogs": ENDPOINTS.GET_BLOGS,
        "courses":ENDPOINTS.GET_COURSES, 
        "quizzes": ENDPOINTS.GET_QUIZZES };
    

    const list = [
        { text: "Practical AI: Hands-On Learning", path: "1" },
        { text: "Def", path: ""},
        { text: "Ghi", path: "" },
    ]
    const available_links = [
        { text: "Blogs", path: "/blogs" },
        { text: "Courses", path: "/courses" },
        { text: "Quizzes", path: "/quizzes" },
    ]
    
    return (
        <div className='course'>
            <SectionBackground />
            <div className='app-content'>
            <div className='flexbox space-between'>
            <h1 className='title'>{text}</h1>
            <div className='flexbox'>
                {available_links.map((link, index) => text === link.text ? <></> : (<LinkedText key={index} link={link.path} text={link.text} />) )}
            </div>

                </div>
            <SearchBox onSearch={()=>{}} />
                
            <div className='flexbox'>
                {list.map((link, index) => <LinkedCard key={index} link={link.path} text={link.text} />)}
            </div>

            </div>
        </div>
    );
}
export default SectionHome;