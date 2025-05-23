import React from "react";

const Reviews = ({courseId}) => {
    const reviews = [
        { name: "Ashish", comment: "Great course, very informative!" },
        { name: "Reena", comment: "Helped me build AI models effectively." },
        { name: "Mathew", comment: "Loved the hands-on projects." },
    ];

    return (
        <div className="app-content">
            <h3 className="title center-text">Reviews</h3>
            <ul className="list flexbox">
                {reviews.map((review, index) => (
                    <li key={index} className="flex1">
                        <h2 className="bg-color2 center-text">{review.name}</h2>
                        <p className="description bg-color1 box">{review.comment}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Reviews;
