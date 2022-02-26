import './wordle.css';

function Keybutton ({datakey, onClick, foundLetters, correctLetters, usedLetters}) {
	let color = "#d8d8d8";
	if(correctLetters.indexOf(datakey)>=0) {
		color = "#6aaa64"; //green
	} else if(foundLetters.indexOf(datakey)>=0) {
		color="#c9b458"; // yellow
	} else if(usedLetters.indexOf(datakey)>=0) {
		color="#787c7e";; // black
	}
	
	
	return (
		<button className='keybutton' onClick={onClick} style={{backgroundColor:color}}>
			{datakey}
		</button>
	);
}


export default Keybutton;