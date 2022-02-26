import BoardRow from './BoardRow';
import './wordle.css';

function BoardContainer({lines, currentWord, answer}) {
	return (
		<div className="board">
			<BoardRow line={lines[0]} currentWord={currentWord} answer={answer} />
			<BoardRow line={lines[1]} currentWord={currentWord} answer={answer} />
			<BoardRow line={lines[2]} currentWord={currentWord} answer={answer} />
			<BoardRow line={lines[3]} currentWord={currentWord} answer={answer} />
			<BoardRow line={lines[4]} currentWord={currentWord} answer={answer} />
			<BoardRow line={lines[5]} currentWord={currentWord} answer={answer} />
		</div>
	);
}


export default BoardContainer;