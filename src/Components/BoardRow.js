import React from 'react';
import './wordle.css';
import GameTile from './GameTile';


class BoardRow extends React.Component {

	render() {
		
		return (
		
  			 <div className="row">
			 <GameTile letter ={this.props.line.length === 0?'': this.props.line.substr(0,1)}/>
			 <GameTile letter ={this.props.line.length < 1 ?'': this.props.line.substr(1,1)}/>
			 <GameTile letter ={this.props.line.length < 2 ?'': this.props.line.substr(2,1)}/>
			 <GameTile letter ={this.props.line.length < 3 ?'': this.props.line.substr(3,1)}/>
			 <GameTile letter ={this.props.line.length < 4 ?'': this.props.line.substr(4,1)}/>
	    	</div>
		);
	}
}

export default BoardRow;