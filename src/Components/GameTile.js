import './wordle.css';

function GameTile({letter, answer, id}) {
	let backgroundColor = "#000000";  // black
	let color = "white";
	if(answer.length === 0) {
		backgroundColor = "white";
		color = "black";
	}
	else {
		let num = parseInt(id);
		if(letter === "") {
			backgroundColor="white";
		} else if(answer.substr(num,1) === letter) {
			backgroundColor = "#6aaa64"; //green
		} else if(answer.search(letter)>=0) {
			backgroundColor="#c9b458"; // yellow
		}
	}
	
	
	return (
		 <div className="gametile" style={{backgroundColor:backgroundColor, color:color}} >
		 {letter} 
		</div>
	);
 }


export default GameTile;