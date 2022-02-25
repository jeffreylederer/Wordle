import React from 'react';
import BoardRow from './BoardRow';
import './wordle.css';



class BoardContainer extends React.Component {
	render(props) {
    	return (
    		<div className="board">
				<BoardRow line={this.props.lines[0]}/>
			    <BoardRow line={this.props.lines[1]}/>
			    <BoardRow line={this.props.lines[2]}/>
			    <BoardRow line={this.props.lines[3]}/>
			    <BoardRow line={this.props.lines[4]}/>
				<BoardRow line={this.props.lines[5]}/>
	    	</div>
		);
	}
}

export default BoardContainer;