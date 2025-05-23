import React from "react";
import { Carousal } from "../Carousal";


const ModuleBreakdown = ({ module }) => {
    return (
        <div className="app-content bg-color4half">
            <h3 className="title center-text">Module Breakdown</h3>
            <h2 className="description center-text">{module?.title}</h2>
            <Carousal id="module" groupSize={3} carousal_items={module?.breakdown} item_html={(item, idx) => (
                <div  className="">
                    <h2 className="bg-color2 center-text ">{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</h2>
                    <p className="description bg-color1 box padding">{item.title}</p>
                </div>)}  />
        </div>
    );
};

export default ModuleBreakdown;
