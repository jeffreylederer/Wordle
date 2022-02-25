import React from 'react';
import ReactDOM from 'react-dom';
import './wordle.css';
import GameTile from './GameTile';


class BoardRow extends React.Component {

	render() {
		return (
  			 <div className="row">
			 <GameTile row={this.props.row} id='1' backcolor='#6aaa64'/>
			 <GameTile row={this.props.row} id='2' backcolor='#c9b458'/>
			 <GameTile row={this.props.row} id='3' backcolor='#939598'/>
			 <GameTile row={this.props.row} id='4' backcolor='white'/>
			 <GameTile row={this.props.row} id='5' backcolor='#6aaa64'/>
	    	</div>
		);
	}
}

export default BoardRow;