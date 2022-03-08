import './gametile.css';

function Tile({evaluation, letter} ) {
	if(!evaluation || evaluation.length ===0)
		evaluation='tbd';
	return (
		 <div className="tile" data-state={evaluation} display={"inline-grid"}  >
		 {letter} 
		</div>
	);
 }


export default Tile;