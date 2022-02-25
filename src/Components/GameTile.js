import React from 'react';
import ReactDOM from 'react-dom';
import './wordle.css';

class GameTile extends React.Component {
	render() {
		return (
   			 <div className="tile" style={{backgroundColor: this.props.backcolor}}>
			 X 
	    	</div>
		);
	}
}

export default GameTile;