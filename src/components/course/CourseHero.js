import React from "react";
import { StarSVG } from "../backgroundSvgs";

const CourseHero = ({course_details}) => {
    return (
        <div className="course-detail"> 
            <div style={{
                zIndex: -1, width: "100%", position: "absolute", height: "70vh", backgroundColor: "var(--text-color)", display: "flex", justifyContent: "flex-end",
                alignItems: "flex-end",
            }} >
                <div style={{ height: "40vh", padding: "4rem" }}>
                    <StarSVG n={4} fill='var(--color4)' stroke='var(--color4)' />
                </div>
                <div style={{ height: "50vh", padding: "4rem" }}>
                    <StarSVG n={4} fill='var(--color4)' size={50} stroke='var(--color4)' />
                </div>
                <div style={{ padding: "4rem" }}>
                    <StarSVG n={12} fill='var(--background-color)' size={150} stroke='var(--background-color)' />
                </div>

            </div>
            <div className="app-content">
                <h1 className="title">{course_details.title}</h1>
                <p className="description">{course_details.description}</p>
                <p className="description"><strong>Staus:</strong> {course_details.status}</p>
                <p className="description"><strong>Duration:</strong> {course_details.duration}</p>
            </div>
        </div>
    );
};

export default CourseHero;
