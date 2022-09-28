import React from 'react';
import UserInfo from "../UserInfo/UserInfo"
import "./sidebar.css";
import BreakTime from "../BreakTime/BreakTime";
import ExerciseDetail from "../ExerciseDetail/ExerciseDetail";


const Sidebar = (props) => {
	
	const {onUpdateBreakTime, currentBreakTime, totalExerciseTime} = props
	
	return (
		<div className="sidebar">
			<UserInfo />
			<BreakTime currentBreakTime={currentBreakTime} onClickItem={onUpdateBreakTime} />
			<ExerciseDetail currentBreakTime={currentBreakTime} totalExerciseTime={totalExerciseTime}  />
        </div>
	);
};

export default Sidebar;
