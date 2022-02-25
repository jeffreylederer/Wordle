import React from 'react';
import './wordle.css';

class Keybutton extends React.Component {
	render() {
    	return (
		    <button  className='keybutton'>{this.props.datakey}</button>
		);
	}
}

export default Keybutton;