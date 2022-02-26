import './wordle.css';
import GameTile from './GameTile';

function BoardRow({line}) {
	return (
	
		 <div className="row">
		 <GameTile letter ={line.length === 0?'': line.substr(0,1)}/>
		 <GameTile letter ={line.length < 1 ?'': line.substr(1,1)}/>
		 <GameTile letter ={line.length < 2 ?'': line.substr(2,1)}/>
		 <GameTile letter ={line.length < 3 ?'': line.substr(3,1)}/>
		 <GameTile letter ={line.length < 4 ?'': line.substr(4,1)}/>
		</div>
	);
}

export default BoardRow;