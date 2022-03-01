import Keyboardrow from './Keyboardrow';
import './keyboard.css';

function Keyboard({Click, foundLetters, correctLetters, usedLetters}) {	

	return (
		<div className='keyboard' >
			<Keyboardrow letters='qwertyuiop' onClick={Click} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			<Keyboardrow letters='asdfghjkl'  onClick={Click} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			<Keyboardrow letters='zxcvbnm'    onClick={Click} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
		</div>
  );
}


export default Keyboard;