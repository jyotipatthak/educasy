import React, { useState, useEffect } from "react";
import './carousal.css';
import { NextIconCircle } from "./backgroundSvgs";

export const Carousal = ({ id, carousal_items, item_html, initialGroupSize=1, onSetSelected = (index) => {}}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [groupSize, setGroupSize] = useState(initialGroupSize);
    const totalItems = carousal_items.length || 0;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setGroupSize(1);
            } else {
                setGroupSize(initialGroupSize);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial group size based on current window size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [initialGroupSize]);

    useEffect(() => {
        document.documentElement.style.setProperty(`--current-index-${id}`, Math.floor(currentIndex / groupSize));
    }, [currentIndex, id, groupSize]);

    const nextSlide = () => {
        setSlide((currentIndex + 1) % totalItems);
    };

    const prevSlide = () => {
        setSlide((currentIndex - 1 + totalItems) % totalItems);
    };

    const setSlide = (index) => {
        setCurrentIndex(index);
        onSetSelected(index);
    };

    const groupItems = (items) => {
        const grouped = [];
        for (let i = 0; i < items.length; i += groupSize) {
            grouped.push(items.slice(i, i + groupSize));
        }
        return grouped;
    };

    const groupedItems = groupItems(carousal_items);

    return (
        <div className="carousel-container">
            <div className="carousel" style={{ transform: `translateX(calc(-100% * var(--current-index-${id})))` }}>
                {groupedItems.map((group, index) => (
                    <div key={index} className={`carousel-item`}>
                        {group.map((item, idx) => (
                            <div key={idx}
                                className={`carousel-content ${(index * groupSize + idx) === currentIndex ? "active" : ""}`}
                                onClick={() => setSlide(index * groupSize + idx)}>
                                {item_html(item, index * groupSize + idx)}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="carousel-controls">
                <button className="control" onClick={prevSlide} ><NextIconCircle fill="var(--color3)" width={100} direction="left" /></button>
                <button className="control" onClick={nextSlide}><NextIconCircle fill="var(--color3)" width={100} direction="right" /></button>
            </div>

            <div className="dots-container">
                {groupedItems.map((_, index) => (
                    <div
                        key={index}
                        className={`dot ${index === Math.floor(currentIndex / groupSize) ? "active" : ""}`}
                        onClick={() => setSlide(index * groupSize)}
                    ></div>
                ))}
            </div>
        </div>
    );
};