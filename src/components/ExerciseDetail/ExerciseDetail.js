import React from "react";
import "./exerciseDetail.css";

const ExerciseDetail = (props) => {
    const { currentBreakTime, totalExerciseTime } = props;

    return (
        <div className="exercise-detail">
            <h1 className="sidebar-section-title">Exercise Details</h1>

            <div className="sidebar-card">
                <p>Exercise time</p>
                <span>{totalExerciseTime} hours</span>
            </div>
            <div className="sidebar-card">
                <p>Break time</p>
                <span>{currentBreakTime} seconds</span>
            </div>
        </div>
    );
};

export default ExerciseDetail;
