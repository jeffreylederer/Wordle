import './gamekeyboard.css';
import Keyboardrow from './Keyboardrow';

function Gamekeyboard({lines, answer, onClick }) {


	return (
		
			<div className="keyboard" >
				<Keyboardrow letters="qwertyuiop" onClick={onClick} lines={lines} answer={answer} /> 
				<Keyboardrow letters="asdfghjkl" onClick={onClick} lines={lines} answer={answer} /> 
				<Keyboardrow letters="qzxcvbnm" onClick={onClick} lines={lines} answer={answer} /> 
			</div>
		
	);

}

export default Gamekeyboard