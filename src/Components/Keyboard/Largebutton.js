import './keyboard.css';

function Largebutton ({datakey, onClick}) {
	return (
		<button className='largebutton width65' onClick={onClick}>
			{datakey}
		</button>
	);
}


export default Largebutton;