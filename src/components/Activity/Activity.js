import React from 'react';
import "./activity.css"

const Activity = (props) => {
	
	const {activity: { title, id, cover, forAge, summary, duration }} = props
	
	return (
		<div className="card activity-card">
			<div className="activity-image">
				<img src={cover} alt={cover} />
			</div>
			<h2 className="card-title">{title}</h2>
			<p className="card-summary">{summary}</p>
			<p className="card-desc">For Age: <span className="text-strong">{forAge[0]} - {forAge[1]}</span> </p>
			<p className="card-desc">Time required: <span className="text-strong">{duration}h</span></p>
        </div>
	);
};

export default Activity;