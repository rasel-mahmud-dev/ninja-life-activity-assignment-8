import React, {useState} from 'react';
import "./question.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleRight} from "@fortawesome/free-solid-svg-icons";

const Questions = (props) => {
	
	const questions = [
		{
			id: 1,
			question: `How does work Reactjs ?`,
			answer: `React is a javascript library that allow to create UI. Behind the seen it create virtual dom that it shadow of real dom. and render to real dom. after changes some data it not replace hold DOM in real dom, compare virtual dom and react dom using diff algorithm that is highly optimized and after comparing it only update on real dom that is changed.`
		},
		{
			id: 2,
			question: `What is different between state and props ?`,
			answer: `Props are used to pass data parent component to child component ? it readonly and immutable. state are local data store that is used own only the component.
			it can't pass data to other component, only be pass as props and it read write data. this.setState method can update state in class component and functional component react useStore hook return Dispatch method as array if index 1. that update state
			`
		},
		{
			id: 3,
			question: `What use of useEffect hook ?`,
			answer: `useEffect best place for initial api call or data fetching. because it render only once if we pass second argument as empty array.
			Although It not only use for initial api call. It also use for any side effect in component. like re render for specific state change using pass state in dependency array. timer and we can clear any subscribed event when component unmount using return function in useEffect.
			`
		}
	]
	
	const [openIds, setOpenIds] = useState([1])
	
	function toggleItem(id){
		if(openIds.includes(id)){
			setOpenIds(openIds.filter(openId=>openId !== id))
		} else {
			setOpenIds([...openIds, id])
		}
	}
	
	
	return (
		<div className="questions">
			<h2 className="section-title">Some Questions</h2>
		<div className="accordion">
			{ questions.map((item)=>(
				<div className="accordion-item">
					<li className={`accordion-header ${openIds.includes(item.id) ? 'active-item' : ''}`} onClick={()=>toggleItem(item.id)}>
						<h3>{item.question}</h3>
						<FontAwesomeIcon icon={openIds.includes(item.id) ? faAngleDown : faAngleRight } />
					</li>
					
					<div className={`content ${openIds.includes(item.id) ? 'expand-content' : 'collapse-content'}`} >
						{item.answer}
					</div>
					
				</div>
			)) }
        </div>
        </div>
	);
};

export default Questions;