import './gamerow.css';
import Tile from './Gametile';

function Gamerow ({length, letters, answer, animation}) {	   
	
	return (
		<div style={{display: "block"}}>
			 <div className="row" data-animation={animation}>
				<Tile evaluation={evaluation(0, answer, letters) } letter={Getletters(0, letters)}/>
				<Tile evaluation={evaluation(1, answer, letters) } letter={Getletters(1, letters)}/>
				<Tile evaluation={evaluation(2, answer, letters) } letter={Getletters(2, letters)}/>
				<Tile evaluation={evaluation(3, answer, letters) } letter={Getletters(3, letters)}/>
				<Tile evaluation={evaluation(4, answer, letters) } letter={Getletters(4, letters)}/>
			</div>
			</div>
		);



	function evaluation(num, answer, letters) {
		let result = "tbd";  
		if(letters.search('\n')<0) {
			return result;
		}
		
		if(answer[num] ===  letters[num]) {
			result = "correct";
		} else if(answer.search(letters[num])>=0) {
			result = "present";
		} else {
			result = "absent"
		}

		return result;
	}

	function Getletters(num, letters) {
		if(letters.length<=num)
			return "";
		return letters[num];
	}
}


export default Gamerow;