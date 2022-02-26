import './wordle.css';

function GameTile({letter, answer, id}) {
    let num = parseInt(id);
	let color = "#000000";  // black
	if(letter === "") {
		color="white";
	} else if(answer.substr(num,1) === letter) {
		color = "#6aaa64"; //green
	} else if(answer.search(letter)>=0) {
		color="#c9b458"; // yellow
	}
	
	return (
		 <div className="tile" style={{backgroundColor:color}} >
		 {letter} 
		</div>
	);
 }


export default GameTile;