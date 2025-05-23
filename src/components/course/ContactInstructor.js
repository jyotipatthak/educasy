import React from "react";

const ContactInstructor = ({instructorId}) => {
    return (
        <div className="app-content">
            <h3 className="title">Contact the Instructor</h3>
            <p className="description textcolor4">If you have any questions, feel free to reach out to the instructor.</p>
            
            <button className="linked_text description"><a href="mailto:prity.dudi@gmail.com">Contact Now</a></button>
            
        </div>
    );
};

export default ContactInstructor;
