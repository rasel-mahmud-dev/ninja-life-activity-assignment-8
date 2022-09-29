import React, {useState} from 'react';
import "./question.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleRight} from "@fortawesome/free-solid-svg-icons";


const Questions = (props) => {
	
	const questions = [
		{
			id: 1,
			question: `How does work Reactjs ?`,
			answer: `How does work Reactjs ?`
		},
		{
			id: 2,
			question: `How does work Reactjs ?`,
			answer: `How does work Reactjs ?`
		},
		{
			id: 3,
			question: `How does work Reactjs ?`,
			answer: `How does work Reactjs ?`
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
					<li className="accordion-header" onClick={()=>toggleItem(item.id)}>
						<h3>{item.question}</h3>
						<FontAwesomeIcon icon={openIds.includes(item.id) ? faAngleDown : faAngleRight } />
					</li>
					
					<div className={`content ${openIds.includes(item.id) ? 'expand-content' : 'collapse-content'}`} >
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque, eius est laborum laudantium neque nisi ratione tempore vero voluptatibus. Cum debitis est provident! Accusamus ad alias atque distinctio dolores eos, fugit illo, in necessitatibus, numquam optio quas quibusdam quisquam sequi vel? Aut ea, laborum. Cupiditate, dolorem enim ex excepturi harum possimus quam? A ab accusamus aut autem commodi culpa deserunt, dolore illum maxime molestiae necessitatibus neque omnis, recusandae repellendus, saepe sequi ullam ut veniam. Aliquam, consectetur consequuntur cum deleniti dolorem doloribus esse excepturi, mollitia nihil nobis repellat sequi suscipit vel! Doloremque ea enim error harum iste natus neque suscipit!
					</div>
					
				</div>
			)) }
        </div>
        </div>
	);
};

export default Questions;