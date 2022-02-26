import './wordle.css';

function Keybutton ({datakey, onClick}) {
	return (
		<button className='keybutton' onClick={onClick}>
			{datakey}
		</button>
	);
}


export default Keybutton;