import React from 'react';
import './gamerow.css';
import Tile from './Gametile';

class BoardRow extends React.Component {	   
	render() {
	
	return (
		<div style={{display: "block"}}>
			 <div className="row" data-animation={this.props.animation}>
				<Tile evaluation={this.evaluation(0, this.props.answer, this.props.letters) } letter={this.Getletters(0, this.props.letters)}/>
				<Tile evaluation={this.evaluation(1, this.props.answer, this.props.letters) } letter={this.Getletters(1, this.props.letters)}/>
				<Tile evaluation={this.evaluation(2, this.props.answer, this.props.letters) } letter={this.Getletters(2, this.props.letters)}/>
				<Tile evaluation={this.evaluation(3, this.props.answer, this.props.letters) } letter={this.Getletters(3, this.props.letters)}/>
				<Tile evaluation={this.evaluation(4, this.props.answer, this.props.letters) } letter={this.Getletters(4, this.props.letters)}/>
			</div>
			</div>
		);
	}


	evaluation(num, answer, letters) {
		let result = "tbd";  
		if(letters.search('\n')<0) {
			return result;
		}
		
		if(answer[num] ===  letters[num]) {
			result = "correct";
		} else if(answer.search(letters[num])>=0) {
			result = "present";
		} else {
			result = "absent"
		}

		return result;
	}

	Getletters(num, letters) {
		if(letters.length<=num)
			return "";
		return letters[num];
	}
}


export default BoardRow;