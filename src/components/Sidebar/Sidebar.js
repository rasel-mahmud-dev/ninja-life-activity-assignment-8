import React from 'react';
import UserInfo from "../UserInfo/UserInfo"
import "./sidebar.css";
import BreakTime from "../BreakTime/BreakTime";


const Sidebar = (props) => {
	
	const {onUpdateBreakTime, currentBreakTime} = props
	
	return (
		<div className="sidebar">
			<UserInfo />
			<BreakTime currentBreakTime={currentBreakTime} onClickItem={onUpdateBreakTime} />
        </div>
	);
};

export default Sidebar;
