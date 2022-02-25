import React from 'react';
import BoardContainer from './BoardContainer';
import Keyboard from './Keyboard';
//import keydown from 'react-keydown';
import './wordle.css';

class Game extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				lines: Array(6).fill(""),
				currentLineNo: 0
		};
	}
	
	
	handleKey = e => {
		let currentWord = this.state.lines[this.state.currentLineNo]
		if(this.state.currentLineNo == 5)
			return;
		if(e.key === 'Shift') {
			return;
		}

		switch(e.key) {
			case 'Enter': // CR
				if(currentWord.length == 5) {
					const currentLineNo = this.state.currentLineNo+1;
					this.setState({currentLineNo: currentLineNo});
					return;
				}
				return;
			case 'Backspace': //bS
				if(currentWord.length > 0) {
					currentWord = currentWord.substr(0, currentWord.length-1);
				}
				break;
			default:
				if(currentWord.length == 5) {
					return;
				}
				let code = e.key.charCodeAt(0);
				if(code >= 65 && code <= 90) { // upper case
					code = code + 32;
				}
				else if(!(code >= 97 && code <= 122)) {  // lower case
					return;
				}
			    currentWord += String.fromCharCode(code);
				break;	
		}
		const lines = this.state.lines.slice();
		lines[this.state.currentLineNo] = currentWord;
		this.setState({lines: lines});
		alert(currentWord);
	}
	
   
	render() {
		return (
    		<div onKeyDown={(e)=>this.handleKey(e)} tabIndex="-1">
			 <BoardContainer lines={this.state.lines}/>
			 <br/> <br/>
			 <Keyboard />
	    	</div>
		);
	}
}


export default Game;