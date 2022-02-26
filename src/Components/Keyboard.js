import Keyboardrow from './Keyboardrow';
import './wordle.css';

function Keyboard({Click, foundLetters, correctLetters}) {	

	return (
		<div className='keyboard' >
			<Keyboardrow letters='qwertyuiop' onClick={Click} foundLetters={foundLetters} correctLetters={correctLetters}/>
			<Keyboardrow letters='asdfghjkl'  onClick={Click} foundLetters={foundLetters} correctLetters={correctLetters}/>
			<Keyboardrow letters='zxcvbnm'    onClick={Click} foundLetters={foundLetters} correctLetters={correctLetters}/>
		</div>
  );
}


export default Keyboard;