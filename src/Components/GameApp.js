import React from 'react';
import Gamekeyboard from './Keyboard/Gamekeyboard';
import Gamerow from './Board/Gamerow';
import LookupWord from './Dictionary';
import GetAnswer from './Answers';
import GetDateIndex from './Utility';
import {Modal} from './Modal';
import './Game.css'


class GameApp extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				lines: Array(6).fill(""),
				animation: Array(6).fill("row"),
				theCurrentLineNo: 0,
				win: false,
				currentWord: "",
				intervalId: null,
				modalMessage: "lets go",
				setShowModal: false,
				answer : ''
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
		if(LookupWord(currentWord) < 0) {
			let animation = this.state.animation.slice();
			animation[this.state.theCurrentLineNo] = "badrow";
			this.setState({animation : animation});
			this.componentDidMount('not a word');
			return;
		}
		let lines = this.state.lines.slice(0,6);
		lines[this.state.theCurrentLineNo] = currentWord + '\n';
		let theCurrentLineNo = this.state.theCurrentLineNo+1;
		this.setState({lines: lines, currentWord: "", theCurrentLineNo: theCurrentLineNo});
		if(this.state.answer === currentWord) {
			let animation = this.state.animation.slice();
			animation[theCurrentLineNo-1] = "win";
			this.setState({win : true, animation : animation});
			let reply = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Phew"]
			this.componentDidMount(reply[theCurrentLineNo]);
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
	   
       this.setState({modalMessage: '', setShowModal: false, animation :Array(6).fill("row")});
	}


		
	
    
	render() {
			
		return (
		<div id="game" onKeyDown={(e)=>this.handleKey(e)} tabIndex="-1">
			<div className="board-container" >
				<div className="board" >
					<Gamerow length='5' letters={this.state.theCurrentLineNo == 0?this.state.currentWord:this.state.lines[0]} answer={this.state.answer} animation={this.state.animation[0]} />
					<Gamerow length='5' letters={this.state.theCurrentLineNo == 1?this.state.currentWord:this.state.lines[1]} answer={this.state.answer} animation={this.state.animation[1]} />
					<Gamerow length='5' letters={this.state.theCurrentLineNo == 2?this.state.currentWord:this.state.lines[2]} answer={this.state.answer} animation={this.state.animation[2]} />
					<Gamerow length='5' letters={this.state.theCurrentLineNo == 3?this.state.currentWord:this.state.lines[3]} answer={this.state.answer} animation={this.state.animation[3]} />
					<Gamerow length='5' letters={this.state.theCurrentLineNo == 4?this.state.currentWord:this.state.lines[4]} answer={this.state.answer} animation={this.state.animation[4]} />
					<Gamerow length='5' letters={this.state.theCurrentLineNo == 5?this.state.currentWord:this.state.lines[5]} answer={this.state.answer} animation={this.state.animation[5]} />
				</div>
			</div>
			<br/><br/>
			<Gamekeyboard lines={this.state.lines} answer={this.state.answer} onClick={this.handleButton}/>
			{this.state.setShowModal ? <Modal  message={this.state.modalMessage} /> : null}
		</div>	 
		);
	}
}


export default GameApp;

/*
	   		<div onKeyDown={(e)=>this.handleKey(e)} tabIndex="-1" className="Game">  
       			<GameBoard lines={this.state.lines} currentWord={this.state.currentWord} answer={this.state.answer} lineno={this.state.theCurrentLineNo} />
				<br/><br/>
				<Keyboard Click={(e) => this.handleButton(e)}  foundLetters={this.state.foundLetters} correctLetters={this.state.correctLetters} usedLetters={this.state.usedLetters} />
			</div>
			
				{this.state.setShowModal ? <Modal  message={this.state.modalMessage} /> : null}
			*/