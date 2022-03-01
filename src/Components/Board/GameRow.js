import './board.css';
import Tile from './Tile';

function BoardRow({currentWord, answer}) {
	   
	
	
	return (
	
		 <div className="gamerow">
		 <Tile evaluation = {evaluation(0, answer, currentWord)} letter = {letter(0, currentWord)}/>
		 <Tile evaluation = {evaluation(1, answer, currentWord)} letter = {letter(1, currentWord)} />
		 <Tile evaluation = {evaluation(2, answer, currentWord)} letter = {letter(2, currentWord)}/>
		 <Tile evaluation = {evaluation(3, answer, currentWord)} letter = {letter(3, currentWord)}/>
		 <Tile evaluation = {evaluation(4, answer, currentWord)} letter = {letter(4, currentWord)}/>
		</div>
	);
}

function evaluation(num, answer, currentWord) {
	let result = "";  
	
	if(answer.length === 5) {
		if(answer[num] ===  currentWord[num]) {
			result = "correct";
		} else if(answer.search(currentWord[num])>=0) {
			result = "present";
		} else {
			result = "absent"
		}
	}
	return result;
}

function letter(num, currentWord) {
	if(currentWord.length<=num)
		return "";
	return currentWord[num];
}


export default BoardRow;