import React from 'react';
import Keyboardrow from './Keyboardrow';
import './wordle.css';

class Keyboard extends React.Component {
	render() {
    	return (
		
    		<div className='keyboard'>
			<Keyboardrow letters='qwertyuiop' id='1' indent='0'/>
			<Keyboardrow letters='asdfghjkl' id='2' indent='1'/>
			<Keyboardrow letters='zxcvbnm' id='3'  indent='0'/>
			</div>
	  );
	}
}

export default Keyboard;