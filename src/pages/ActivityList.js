import React, {useEffect, useState} from 'react';
import "./activityList.css"

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
			{ activities.map(activity=>(
				<div>
					<h1>{activity.title}</h1>
				</div>
			)) }
			
        </div>
	);
};

export default ActivityList;