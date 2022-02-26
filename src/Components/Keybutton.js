import './wordle.css';

function Keybutton ({datakey, onClick, foundLetters, correctLetters}) {
	let color = "#d8d8d8";
	if(correctLetters.indexOf(datakey)>=0) {
		color = "#6aaa64"; //green
	}
	if(foundLetters.indexOf(datakey)>=0) {
		color="#c9b458"; // yellow
	}
	
	
	return (
		<button className='keybutton' onClick={onClick} style={{backgroundColor:color}}>
			{datakey}
		</button>
	);
}


export default Keybutton;