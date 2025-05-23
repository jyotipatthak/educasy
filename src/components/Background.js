import React from 'react';
import { Empty, MovingTriangles, RectCutSemicircle, Staircase2, Staircase, Semicircles, MovingSemicircle } from './backgroundSvgs';
// import './Background.css';    // Importing the CSS file

export const HomeBackground = () => {
    return (
        <div className="background-container" style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column", padding: "4rem", justifyContent: "flex-end" }}>
                <Semicircles size={80} />
                <Empty fill='var(--color2)' />
                <div >
                    <MovingSemicircle />
                    <Staircase fill='var(--text-color)' />

                </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", flexDirection: "column", padding: "4rem" }}>
                <div style={{ padding: 0, margin: 0, height: 100 }}>
                    <Staircase2 fill='var(--color1)' />
                    <Empty fill='var(--color2)' />
                </div>
                <MovingTriangles />
                <RectCutSemicircle fill='var(--color3)' />
            </div>
            {/*
            <Empty width={100} height={100} />
            <Staircase width={100} height={100}/>
            <Semicircle/>
            <Semicircles />
            <SemicirclesInSquare />
            <SemicirclesOnSquare /> */}
        </div>
    );
};

export const SectionBackground = () => {
    return (
        <div className="background-container" style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <Staircase fill='var(--text-color)' width={120} height={120} />
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", flexDirection: "column", padding: "4rem" }}>
                <div style={{ padding: 0, margin: 0, height: 100 }}>
                    <Staircase2 fill='var(--color1)' />
                    <Empty fill='var(--color2)' />
                </div>
                <RectCutSemicircle fill='var(--color3)' />
            </div>
        </div>
    );
};
