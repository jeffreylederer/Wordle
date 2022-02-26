import React from 'react';
import BoardContainer from './BoardContainer';
import Keyboard from './Keyboard';
//import keydown from 'react-keydown';
import './wordle.css';

class Game extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				theLines: Array(6).fill(""),
				theCurrentLineNo: 0
		};
	}

	handleButton = e =>{
		let currentWord = this.state.theLines[this.state.theCurrentLineNo];
		if(this.state.theCurrentLineNo === 6) {
			return;
		}
		
		switch(e) {
			case 'Enter': // CR
				if(currentWord.length === 5) {
					let CurrentLineNo = this.state.theCurrentLineNo+1;
					this.setState({theCurrentLineNo: CurrentLineNo});
					return;
				}
				return;
			case 'Backspace': //bS
				if(currentWord.length > 0) {
					currentWord = currentWord.substr(0, currentWord.length-1);
				}
				break;
			default:
			    if(currentWord.length === 5) {
					return;
				}
			    currentWord += e;
				break;	
		}
		let lines = this.state.theLines.slice(0,6);
		lines[this.state.theCurrentLineNo] = currentWord;
		this.setState({theLines : lines.slice(0,6)});
	}

	
	handleKey = e => {
		let currentWord = this.state.theLines[this.state.theCurrentLineNo];
		if(this.state.theCurrentLineNo === 6)
			return;
		if(e.key === 'Shift' ) {
			return;
		}

		switch(e.key) {
			case 'Enter': // CR
				if(currentWord.length === 5) {
					let CurrentLineNo = this.state.theCurrentLineNo+1;
					this.setState({theCurrentLineNo: CurrentLineNo});
					return;
				}
				return;
			case 'Backspace': //bS
				if(currentWord.length > 0) {
					currentWord = currentWord.substr(0, currentWord.length-1);
				}
				break;
			default:
				if(currentWord.length === 5) {
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
		let lines = this.state.theLines.slice(0,6);
		lines[this.state.theCurrentLineNo] = currentWord;
		this.setState({theLines : lines.slice(0,6)});
	}

	
   //<Keyboard Click={(e) => this.handleButton(e)} />
   
	render() {
		return (
	   		<div onKeyDown={(e)=>this.handleKey(e)} tabIndex="-1">  
     			
       			<BoardContainer lines={this.state.theLines}/>
				<br/><br/>
				<Keyboard Click={(e) => this.handleButton(e)} />
				
				
			</div>
		);
	}
}


export default Game;