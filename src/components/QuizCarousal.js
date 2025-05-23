import React, { useState, useEffect } from "react";
import './carousal.css';
import { NextIconCircle } from "./backgroundSvgs";

export const QuizCarousal = ({ id, carousal_items, item_html }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = carousal_items.length || 0;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
            } else {
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial group size based on current window size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        document.documentElement.style.setProperty(`--current-index-${id}`, Math.floor(currentIndex));
    }, [currentIndex, id]);

    const nextSlide = () => {
        setSlide((currentIndex + 1) % totalItems);
    };

    const prevSlide = () => {
        setSlide((currentIndex - 1 + totalItems) % totalItems);
    };

    const setSlide = (index) => {
        setCurrentIndex(index);
    };

    const maxVisibleNumbers = 4;

    const getVisibleNumbers = () => {
        let start = Math.max(0, currentIndex - Math.floor(maxVisibleNumbers / 2));
        let end = start + maxVisibleNumbers;

        if (end > totalItems) {
            end = totalItems;
            start = Math.max(0, end - maxVisibleNumbers);
        }

        return { start, end };
    };

    const { start, end } = getVisibleNumbers();



    return (
        <div className="quiz-carousel-container">
            <div className="quiz-carousel" style={{ transform: `translateX(calc(-100% * var(--current-index-${id})))` }}>
                {carousal_items.map((item, index) => (
                    <div key={index}
                        className={`quiz-carousel-item ${(index) === currentIndex ? "active" : ""}`}>
                        {item_html(item, index)}
                    </div>
                ))}
            </div>

            {/* <div className="number-container">
                <button className="quiz-control" onClick={prevSlide} ><NextIconCircle fill="var(--color1)" width={100} direction="left" /></button>
                {carousal_items.map((_, index) => (
                    <div
                        key={index}
                        className={`number-dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => setSlide(index)}
                    >{index + 1}</div>
                ))}
                <button className="quiz-control" onClick={nextSlide}><NextIconCircle fill="var(--color1)" width={100} direction="right" /></button>
            </div> */}
            <div className="number-container">
                <button className="quiz-control" onClick={prevSlide}><NextIconCircle fill="var(--color1)" width={100} direction="left" /></button>
                    {start > 0 && <li className="number-dot">...</li>}
                    {carousal_items.slice(start, end).map((_, index) => (
                        <li
                            key={start + index}
                            className={`number-dot ${start + index === currentIndex ? "active" : ""}`}
                            onClick={() => setSlide(start + index)}
                        >
                            {start + index + 1}
                        </li>
                    ))}
                    {end < totalItems && <li className="number-dot">...</li>}
                <button className="quiz-control" onClick={nextSlide}><NextIconCircle fill="var(--color1)" width={100} direction="right" /></button>
            </div>
        </div>
    );
};