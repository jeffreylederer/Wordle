import './wordle.css';

function Tile({evaluation, letter}) {
	let backgroundColor = "white";
	let color = "black";
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
	}

	
	
	return (
		 <div className="gametile" style={{backgroundColor:backgroundColor, color:color}} >
		 {letter} 
		</div>
	);
 }


export default Tile;