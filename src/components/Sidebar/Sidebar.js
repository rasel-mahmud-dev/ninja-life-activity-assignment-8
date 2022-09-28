import React from 'react';
import UserInfo from "../UserInfo/UserInfo"
import "./sidebar.css";
import BreakTime from "../BreakTime/BreakTime";


const Sidebar = () => {
	return (
		<div className="sidebar">
			<UserInfo />
			<BreakTime />
        </div>
	);
};

export default Sidebar;
