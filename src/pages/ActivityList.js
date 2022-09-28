import React, {useEffect, useState} from 'react';
import "./activityList.css"
import Activity from "../components/Activity/Activity";
import Sidebar from "../components/Sidebar/Sidebar";


const ActivityList = () => {
	const [activities, setActivities] = useState([])
	const [currentBreakTimeValue, setCurrentBreakTimeValue] = useState(10)
	
	
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
		localStorage.setItem("breakTime", value)
		setCurrentBreakTimeValue(value)
	}
	
	return (
		<div className="activity-container">
			<div>
				<h4 className="section-title">Select Daily Activity</h4>
				<div className="activity-list">
					{ activities.map(activity=> <Activity key={activity.id} activity={activity} />) }
				</div>
			</div>
			
			<Sidebar
				onUpdateBreakTime={handleSetCurrentBreakTime}
				currentBreakTime={currentBreakTimeValue}
			/>
			
        </div>
	);
};

export default ActivityList;