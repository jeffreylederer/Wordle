import GameRow from './GameRow';
import './board.css';

function GameBoard({lines, currentWord, answer, lineno}) {
	let num = parseInt(lineno);
	return (
		<div className="gameboard">
			<GameRow currentWord={num===0? currentWord:lines[0]} answer={num > 0 ?answer: ""} />
			<GameRow currentWord={num===1? currentWord:lines[1]} answer={num > 1 ?answer: ""} />
			<GameRow currentWord={num===2? currentWord:lines[2]} answer={num > 2 ?answer: ""} />
			<GameRow currentWord={num===3? currentWord:lines[3]} answer={num > 3 ?answer: ""} />
			<GameRow currentWord={num===4? currentWord:lines[4]} answer={num > 4 ?answer: ""} />
			<GameRow currentWord={num===5? currentWord:lines[5]} answer={num > 5 ?answer: ""} />
		</div>
	);
}


export default GameBoard;