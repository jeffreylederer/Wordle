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
				theCurrentLineNo: 0,
				win: false,
				foundLetters: "",
				correctLetters: ""
		};
		
	}

	handleButton = e =>{
		if(this.state.win)
			return;
		let currentWord = this.state.theLines[this.state.theCurrentLineNo];
		if(this.state.theCurrentLineNo === 6) {
			return;
		}
		
		switch(e) {
			case 'Enter': // CR
				if(currentWord.length === 5) {
					this.CheckLetters();
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
		if(this.props.answer === currentWord)
			this.setState({win : true});
	}

	
	handleKey = e => {
		if(this.state.win)
			return;
		let currentWord = this.state.theLines[this.state.theCurrentLineNo];
		if(this.state.theCurrentLineNo === 6)
			return;
		if(e.key === 'Shift' ) {
			return;
		}

		switch(e.key) {
			case 'Enter': // CR
				if(currentWord.length === 5) {
					this.CheckLetters();
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
		if(this.props.answer === currentWord)
			this.setState({win : true});
	}
	
	CheckLetters = () => {
		let currentWord = this.state.theLines[this.state.theCurrentLineNo];
		let correctLetters=this.state.correctLetters;
		let foundLetters=this.state.foundLetters;
		for(let i=0; i< 5; i++) {
			let letter = currentWord.substr(i,1);
			if(this.props.answer.substr(i,1) === letter) {
				if(correctLetters.search(letter) < 0) {
					correctLetters = correctLetters.concat(letter);
					if(foundLetters.search(letter)>= 0) {
						foundLetters=foundLetters.replace(letter,"");
					}
				}
			} else 	if(this.props.answer.indexOf(letter) >= 0 ) {
				if(foundLetters.search(letter) < 0) {
					foundLetters = foundLetters.concat(letter);
				}
			}
		}
		let CurrentLineNo = this.state.theCurrentLineNo+1;
		this.setState({correctLetters:correctLetters},
		              {foundLetters:foundLetters},
					  {theCurrentLineNo: CurrentLineNo});
	}

	
   //<Keyboard Click={(e) => this.handleButton(e)} />
   
	render() {
		let currentWord = this.state.theLines[this.state.theCurrentLineNo];
		return (
	   		<div onKeyDown={(e)=>this.handleKey(e)} tabIndex="-1">  
     			
       			<BoardContainer lines={this.state.theLines} currentWord={currentWord} answer={this.props.answer} />
				<br/><br/>
				<Keyboard Click={(e) => this.handleButton(e)}  foundLetters={this.state.foundLetters} correctLetters={this.state.correctLetters} />
				
				
			</div>
		);
	}
}


export default Game;