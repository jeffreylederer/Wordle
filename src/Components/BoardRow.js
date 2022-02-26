import './wordle.css';
import GameTile from './GameTile';

function BoardRow({line, currentWord, answer}) {
	return (
	
		 <div className="row">
		 <GameTile letter ={line.length === 0?'': line.substr(0,1)} answer={answer} id="0"/>
		 <GameTile letter ={line.length < 1 ?'':  line.substr(1,1)} answer={answer} id="1"/>
		 <GameTile letter ={line.length < 2 ?'':  line.substr(2,1)} answer={answer} id="2"/>
		 <GameTile letter ={line.length < 3 ?'':  line.substr(3,1)} answer={answer} id="3"/>
		 <GameTile letter ={line.length < 4 ?'':  line.substr(4,1)} answer={answer} id="4"/>
		</div>
	);
}

export default BoardRow;