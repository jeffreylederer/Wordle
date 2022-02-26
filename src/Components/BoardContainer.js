import BoardRow from './BoardRow';
import './wordle.css';

function BoardContainer({lines}) {
	return (
		<div className="board" tabindex="1">
			<BoardRow line={lines[0]}/>
			<BoardRow line={lines[1]}/>
			<BoardRow line={lines[2]}/>
			<BoardRow line={lines[3]}/>
			<BoardRow line={lines[4]}/>
			<BoardRow line={lines[5]}/>
		</div>
	);
}


export default BoardContainer;