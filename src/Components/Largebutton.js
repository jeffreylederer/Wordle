import './wordle.css';

function Largebutton ({datakey, onClick}) {
	return (
		<button className='largebutton' onClick={onClick}>
			{datakey}
		</button>
	);
}


export default Largebutton;