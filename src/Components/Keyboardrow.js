import React from 'react';
import './wordle.css';
import Keybutton from './Keybutton';

class Keyboardrow extends React.Component {

			
	render() {
		const str = this.props.letters;
		
		if(this.props.index==0 && str.length == 10)
		{
			return (
				<div className='keyboardrow'>
				   <Keybutton datakey={str[0]} />
				   <Keybutton datakey={str[1]} />
				   <Keybutton datakey={str[2]} />
				   <Keybutton datakey={str[3]} />
				   <Keybutton datakey={str[4]} />
				   <Keybutton datakey={str[5]} />
				   <Keybutton datakey={str[6]} />
				   <Keybutton datakey={str[7]} />
				   <Keybutton datakey={str[8]} />
				   <Keybutton datakey={str[9]} />
				</div>
			);
		} else if(this.props.index==1) {
			  return ( 
			  <div className='keyboardrow'>
			  <div className='halfspacer' />
			   <Keybutton datakey={str[0]} />
			   <Keybutton datakey={str[1]} />
			   <Keybutton datakey={str[2]} />
			   <Keybutton datakey={str[3]} />
			   <Keybutton datakey={str[4]} />
			   <Keybutton datakey={str[5]} />
			   <Keybutton datakey={str[6]} />
			   <Keybutton datakey={str[7]} />
			   <Keybutton datakey={str[8]} />
			   </div>
			   );
			  
			} else {
				return (
				<div className='keyboardrow'>
			<Keybutton datakey={str[0]} />
			<Keybutton datakey={str[1]} />
			<Keybutton datakey={str[2]} />
			<Keybutton datakey={str[3]} />
			<Keybutton datakey={str[4]} />
			<Keybutton datakey={str[5]} />
			<Keybutton datakey={str[6]} />
			</div>
			);
		}
	}
}

export default Keyboardrow;