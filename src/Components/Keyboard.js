import Keyboardrow from './Keyboardrow';
import './wordle.css';

function Keyboard({Click}) {	
	return (
		<div className='keyboard'>
			<Keyboardrow letters='qwertyuiop' onClick={Click}/>
			<Keyboardrow letters='asdfghjkl'  onClick={Click}/>
			<Keyboardrow letters='zxcvbnm'    onClick={Click}/>
		</div>
  );
}


export default Keyboard;