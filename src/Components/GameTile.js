import React from 'react';
import './wordle.css';

class GameTile extends React.Component {
	render() {
		return (
   			 <div className="tile" >
			 {this.props.letter} 
	    	</div>
		);
	}
}

export default GameTile;