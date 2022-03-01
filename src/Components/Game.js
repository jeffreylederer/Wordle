import React from 'react';
import GameBoard from './Board/GameBoard';
import Keyboard from './Keyboard/Keyboard';
import LookupWord from './Dictionary';
import './wordle.css';
import GetAnswer from './Answers';
import GetDateIndex from './Utility';
import {Modal} from './Modal';

class Game extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				lines: Array(6).fill(""),
				theCurrentLineNo: 0,
				win: false,
				foundLetters: "",
				correctLetters: "",
				usedLetters: "",
				currentWord: "",
				answer: "",
				intervalId: null,
				modalMessage: "lets go",
				setShowModal: false
		};
		this.state.answer= GetAnswer(GetDateIndex());
 	}
	
		
	handleButton = e =>{
		if(this.state.win)
			return;
		let currentWord = this.state.currentWord;
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
		this.setState( {currentWord: currentWord} );
	}

	
	handleKey = e => {
		if(this.state.win)
			return;
		let currentWord = this.state.currentWord;
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
		this.setState( {currentWord: currentWord} );

	}
	
	CheckLetters = () => {
		let currentWord = this.state.currentWord;
		let correctLetters=this.state.correctLetters;
		let foundLetters=this.state.foundLetters;
		let usedLetters = this.state.usedLetters;
		for(let i=0; i< 5; i++) {
			let letter = currentWord.substr(i,1);
			if(this.state.answer.substr(i,1) === letter) {
				if(correctLetters.search(letter) < 0) {
					correctLetters = correctLetters.concat(letter);
					if(foundLetters.search(letter)>= 0) {
						foundLetters=foundLetters.replace(letter,"");
					}
				}
			} else 	if(this.state.answer.indexOf(letter) >= 0 ) {
				if(foundLetters.search(letter) < 0) {
					foundLetters = foundLetters.concat(letter);
				}
			}
			
			if(correctLetters.search(letter) < 0 && foundLetters.search(letter) < 0 && usedLetters.search(letter) < 0) {
				usedLetters = usedLetters.concat(letter);
			}
		}
		if(LookupWord(currentWord) < 0) {
			this.componentDidMount('not a word');
			return;
		}
		let lines = this.state.lines.slice(0,6);
		lines[this.state.theCurrentLineNo] = currentWord;
		let CurrentLineNo = this.state.theCurrentLineNo+1;
		this.setState({correctLetters:correctLetters,
		               foundLetters:foundLetters,
					   usedLetters:usedLetters,
					   theCurrentLineNo: CurrentLineNo,
					   lines: lines,
					   currentWord: ""});
		if(this.state.answer === currentWord) {
			this.setState({win : true});
			this.componentDidMount('you win');
		}
	}
	
	componentDidMount = (message) => {
			let intervalId = setInterval(this.timer, 3000);
		   // store intervalId in the state so it can be accessed later:
		this.setState({intervalId: intervalId,
						modalMessage: message, 
						setShowModal: true
		});
		
	};

	timer = () => {
	   // use intervalId from the state to clear the interval
	   clearInterval(this.state.intervalId);
	   this.setState({modalMessage: '', setShowModal: false});
	}


		
	
    
	render() {
		return (
		<>
	   		<div onKeyDown={(e)=>this.handleKey(e)} tabIndex="-1" className="Game">  
       			<GameBoard lines={this.state.lines} currentWord={this.state.currentWord} answer={this.state.answer} lineno={this.state.theCurrentLineNo} />
				<br/><br/>
				<Keyboard Click={(e) => this.handleButton(e)}  foundLetters={this.state.foundLetters} correctLetters={this.state.correctLetters} usedLetters={this.state.usedLetters} />
			</div>
			
				{this.state.setShowModal ? <Modal  message={this.state.modalMessage} /> : null}
			
			
		</>
			
			
	 
		);
	}
}


export default Game;