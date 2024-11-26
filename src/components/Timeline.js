import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import './Timeline.css'; // Import the CSS for styling

import { ReactComponent as WorkIcon } from "../assets/work.svg";
import { ReactComponent as SchoolIcon } from "../assets/school.svg";


import TimelineElements from "./TimelineElements";

import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
    let workIconStyles = { background: "var(--ascent-color)" };
    let schoolIconStyles = { background: "var(--ascent-color)" };

    return (
        <div>
        <VerticalTimeline>
        {TimelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

            return (
            <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                className={`vertical-timeline-element ${isWorkIcon ? 'work' : 'school'}`}  // Apply work or school class

            >
                <div className="title-container">
                <div className="text-container">
                    <h3 className="vertical-timeline-element-title">
                    {element.title}
                    </h3>
                    <h5 className="vertical-timeline-element-subtitle">
                    {element.location}
                    </h5>
                </div>
                <div className="icon-container">
                    <img src={element.img} alt="icon" className="timeline-icon" />
                </div>
                </div>
                <p id="description">{element.description}</p>
                {showButton && (
                <a
                    className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                    }`}
                    href="/"
                >
                    {element.buttonText}
                </a>
                )}
            </VerticalTimelineElement>
            );
        })}
        </VerticalTimeline>
    </div>
);
};

export default Timeline;