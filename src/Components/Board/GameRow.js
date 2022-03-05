import './gamerow.css';
import Gametile from './Gametile';

function Gamerow({letters, length, answer,animation}) {
	
	return (
		 
		 <div className={animation} >
			<Gametile evaluation ={evaluation(0, answer, letters)} letter = {letters.length > 0?letters[0] :''} />
			<Gametile evaluation ={evaluation(1, answer, letters)} letter = {letters.length > 1?letters[1] :''} />
			<Gametile evaluation ={evaluation(2, answer, letters)} letter = {letters.length > 2?letters[2] :''} />
			<Gametile evaluation ={evaluation(3, answer, letters)} letter = {letters.length > 3?letters[3] :''} />
			<Gametile evaluation ={evaluation(4, answer, letters)} letter = {letters.length > 4?letters[4] :''} />
			
			
		</div>
	);
}

function evaluation(num, answer, letters) {
	let result = "tbd";  
	if(letters.search('\n')>=0) {
		if(letters.length > num) {
			if(answer[num] ===  letters[num]) {
				result = "correct";
			} else if(answer.search(letters[num])>=0) {
				result = "present";
			} else {
				result = "absent";
			}
		}
	}
	return result;
}

/*
			<Gametile evaluation ={evaluation(1, answer, letters)} letter = {letters.length > 1?letters[1] :''} />
			<Gametile evaluation ={evaluation(2, answer, letters)} letter = {letters.length > 2?letters[2] :''} />
			<Gametile evaluation ={evaluation(3, answer, letters)} letter = {letters.length > 3?letters[3] :''} />
			<Gametile evaluation ={evaluation(4, answer, letters)} letter = {letters.length > 4?letters[4] :''} />
			
			<Gametile evaluation ={evaluation(1, answer, letters)} letter = {letters.length > 1?letters[1] :''} />
			
			*/


export default Gamerow;