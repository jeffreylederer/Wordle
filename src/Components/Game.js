import React from 'react';
import BoardContainer from './BoardContainer';
import Keyboard from './Keyboard';
import keydown from 'react-keydown';
import './wordle.css';

class Game extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				aline: Array(5).fill(null),
				theboard: [this.aline, this.aline, this.aline, this.aline, this.aline, this.aline],
				currentLineNo: 0,
				currentWord: ""
		};
	}

	handleKey = e => {
		alert(e.keyCode);
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