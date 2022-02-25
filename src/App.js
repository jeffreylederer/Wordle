import React from 'react';
import Game from './Components/Game';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div>
			<header>
			  <div className="menu-left">
				
			  </div>
			  <div className="title">
				Wordle
			  </div>
			  <div className="menu-right">
				
			  </div>
			</header>
		<hr/><br/>
			<Game word='enter'/> 
			</div>
		  );
	}
}

export default App;
