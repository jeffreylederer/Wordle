import React from 'react';
import BoardContainer from './BoardContainer';
import Keyboard from './Keyboard';
//import keydown from 'react-keydown';
import './wordle.css';

class Game extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				aline: Array(6).fill(""),
				currentLineNo: 0,
				currentWord: "a",
				win : false
		};
	}

	handleKey = e => {
		if(this.state.currentLineNo == 6 || this.state.win)
			return;
		if(e.key === 'Shift') {
			return;
		}

		switch(e.key) {
			case 'Enter': // CR
				if(this.state.currentWord.length === 5) {
					this.state.aline[this.state.currentLineNo] = this.state.currentWord;
					this.state.currentWord="";
					this.state.currentLineNo += 1;
				}
				break;
			case 'Backspace': //bS
				if(this.state.currentWord.length > 0) {
					this.state.currentWord = this.state.currentWord.substr(0, this.state.currentWord.length-1);
				}
				break;
			default:
				let code = e.key.charCodeAt(0);
				if(code >= 65 && code <= 90) { // upper case
					code = code + 32;
				}
				else if(code >= 97 && code <= 122) {  // lower case
									
				}
				else {
					return;
				}
				let codeKey = String.fromCharCode(code);
			    if(this.state.currentWord.length < 5) {
					this.state.currentWord += codeKey;
				}
				break;	
		}
		alert(this.state.currentWord);
	}
   
	render() {
		return (
    		<div onKeyDown={this.handleKey} tabIndex="0">
			 <BoardContainer />
			 <br/> <br/>
			 <Keyboard />
	    	</div>
		);
	}
}


export default Game;