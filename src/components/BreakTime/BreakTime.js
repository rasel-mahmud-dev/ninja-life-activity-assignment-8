import React from 'react';
import "./breakTime.css";


const BreakTime = (props) => {
	
	const {currentBreakTimeValue, onClickItem} = props
	
	const breakTimes = [10, 20, 30, 40, 50]
	
	return (
		<div>
			<h4 className="sidebar-section-title">Add A Break</h4>
			<div className="break-time">
			{ breakTimes.map(time=>(
				<div
					onClick={()=>onClickItem(time)}
					key={time}
				     className={`break-time__item ${currentBreakTimeValue === time ? "active" : ""}`}
				>
					<span>{time}s</span>
					
				</div>
			)) }
        </div>
		</div>
	);
};

export default BreakTime;
