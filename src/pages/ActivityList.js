import React, {useEffect, useState} from 'react';
import "./activityList.css"
import Activity from "../components/Activity/Activity";
import Sidebar from "../components/Sidebar/Sidebar";
import Questions from "../components/Questions/Questions";


const ActivityList = ({isOpenMobileSidebar, onToggleMobileSidebar}) => {
	const [activities, setActivities] = useState([])
	const [currentBreakTimeValue, setCurrentBreakTimeValue] = useState(10)
	const [totalExerciseTime, setTotalExerciseTime] = useState(0)
	
	
	useEffect(()=>{
		fetch("/data.json")
			.then(res=>res.json())
			.then(data=>{
			setActivities(data)
			})
			.catch(ex=>{
			
			})
		
		let breakTime = localStorage.getItem("breakTime")
		if(breakTime){
			setCurrentBreakTimeValue(Number(breakTime))
		}
		
	}, [])
	
	
	
	function handleSetCurrentBreakTime(value){
		// add value in localstorage
		localStorage.setItem("breakTime", value)
		setCurrentBreakTimeValue(value)
	}
	
	function handleSetTotalExerciseTime(time){
		let updateTime = totalExerciseTime + time
		setTotalExerciseTime(updateTime)
	}
	
	return (
		<div className="activity-container">
			<div>
				<h4 className="section-title">Select Daily Activity</h4>
				<div className="activity-list">
					{ activities.map(activity=> <Activity
						onUpdateExerciseTime={handleSetTotalExerciseTime}
						key={activity.id} activity={activity} />
					) }
				</div>
			</div>
			
			{/**** fixed sidebar ****/}
			<Sidebar
				onToggleMobileSidebar={onToggleMobileSidebar}
				isOpenMobileSidebar={isOpenMobileSidebar}
				onUpdateBreakTime={handleSetCurrentBreakTime}
				currentBreakTime={currentBreakTimeValue}
				totalExerciseTime={totalExerciseTime}
			/>
			
			{/**** some question list component ****/}
			<Questions />
			
        </div>
	);
};

export default ActivityList;