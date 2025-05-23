import React from 'react'
import { Link } from 'react-router-dom';

const LinkedText = ({link,text}) => {
    return(
        <div className='linked_text colored'>
            <Link to={link} >{text}</Link>
        </div>
    );
}

export const LinkedCard = ({link,text}) => {
    return(
        <div className='linked_text colored flexbox card'>
            <Link to={link} >{text}</Link>
        </div>
    );
}
export default LinkedText;