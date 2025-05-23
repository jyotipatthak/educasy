import React from "react";

const CourseProgress = () => {
    const progressData = {
        completed: 32.3,
        inProgress: 3.2,
        yetToStart: 64.5,
    };

    return (
        <div className="app-content bg-text">
            <h3 className="title center-text">See your progress</h3>
            <p>Completed: {progressData.completed}%</p>
            <p>In Progress: {progressData.inProgress}%</p>
            <p>Yet to Start: {progressData.yetToStart}%</p>
        </div>
    );
};

export default CourseProgress;
