import React from 'react';
import ReactDOM from 'react-dom';
import BoardRow from './BoardRow';
import './wordle.css';



class BoardContainer extends React.Component {
	render() {
    	return (
    		<div className="board">
			    <BoardRow row="1" />
			    <BoardRow row="2" />
			    <BoardRow row="3" />
			    <BoardRow row="4" />
				<BoardRow row="5" />
				<BoardRow row="6" />
	    	</div>
		);
	}
}

export default BoardContainer;