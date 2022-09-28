import React, {useEffect, useState} from 'react';
import "./activityList.css"
import Activity from "../components/Activity/Activity";

const ActivityList = () => {
	const [activities, setActivities] = useState([])
	
	useEffect(()=>{
		fetch("/data.json")
			.then(res=>res.json())
			.then(data=>{
			setActivities(data)
			})
			.catch(ex=>{
			
			})
	}, [])
	
	return (
		<div className="activity-container">
			<h4 className="section-title">Select Daily Activity</h4>
			<div className="activity-list">
				{ activities.map(activity=> <Activity key={activity.id} activity={activity} />) }
			</div>
			
        </div>
	);
};

export default ActivityList;