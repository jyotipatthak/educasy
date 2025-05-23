import React from "react";

const Notes = ({courseId}) => {
    return (
        <div className="bg-color4 app-content">
            <h3 className="title ">Notes</h3>
            <a href="#download-notes " className="linked_text">
                Get notes in PDF format
            </a>
        </div>
    );
};

export default Notes;
