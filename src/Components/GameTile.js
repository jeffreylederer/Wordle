import './wordle.css';

function GameTile({letter}) {
	return (
		 <div className="tile" >
		 {letter} 
		</div>
	);
 }


export default GameTile;