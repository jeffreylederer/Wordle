import './tile.css';

function Tile({evaluation, letter}) {
	let backgroundColor = "";
	let color = "";
	
	switch(evaluation)
	{
		case 'correct':
			backgroundColor = "#6aaa64"; //green
			color = "white";
			break;
		case "present":
			backgroundColor = "#c9b458"; // yellow
			color = "white";
			break;
		case 'absent':
			backgroundColor = "#787c7e";
			color = "white";
			break;
		default:
			backgroundColor = "white";
			color = "black";

	}

	
	
	return (
		 <div className="tile" style={{backgroundColor:backgroundColor, color:color}} >
		 {letter} 
		</div>
	);
 }


export default Tile;