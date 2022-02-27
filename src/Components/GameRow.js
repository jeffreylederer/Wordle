import './wordle.css';
import GameTile from './GameTile';

function BoardRow({currentWord, answer}) {
	return (
	
		 <div className="gamerow">
		 <GameTile letter ={currentWord.length === 0?'': currentWord.substr(0,1)} answer={answer} id="0"/>
		 <GameTile letter ={currentWord.length < 1 ?'':  currentWord.substr(1,1)} answer={answer} id="1"/>
		 <GameTile letter ={currentWord.length < 2 ?'':  currentWord.substr(2,1)} answer={answer} id="2"/>
		 <GameTile letter ={currentWord.length < 3 ?'':  currentWord.substr(3,1)} answer={answer} id="3"/>
		 <GameTile letter ={currentWord.length < 4 ?'':  currentWord.substr(4,1)} answer={answer} id="4"/>
		</div>
	);
}

export default BoardRow;