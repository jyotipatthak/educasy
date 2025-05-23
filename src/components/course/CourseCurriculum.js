import React from "react";
import { SemicirclesOnRectangle } from "../backgroundSvgs";
import { Carousal } from "../Carousal";

const CourseCurriculum = ({ modules, title = "", onSetSelected }) => {

    return (
        <div className="app-content">
            <h3 className="title center-text">Course Curriculum</h3>
            <h4 className="description center-text">{title}</h4>
            <ul className="flexbox list">
                <Carousal  id="curriculum" carousal_items={modules} item_html={(module,index) => (
                    <div className="module-background clickable">
                        <SemicirclesOnRectangle fill={`var(--color${(index % 3) + 1})`} text={module.title} textColor="var(--dark-text-color)" index={index} />
                    </div>)} onSetSelected={onSetSelected}/>
            </ul>
        </div>
    );
};

export default CourseCurriculum;
