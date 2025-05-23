import React from "react";

const WhyEnroll = ({reasonToEnroll}) => {
    
    return (
        <div className="app-content bg-color4">
            <h3 className="title">Why Enroll?</h3>
            <div className="flexbox">
            {
                reasonToEnroll.map((reason, index) => 
                    <p className="description bg-color1 flex1 app-content" key={index}>{reason}</p>)
            }
            </div>
        </div>
    );
};

export default WhyEnroll;
