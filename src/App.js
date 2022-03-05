import React, { useState } from "react";
import GameApp from './Components/GameApp';
import {HelpScreen} from './Components/HelpScreen';
import './index.css';

function App(){
	const [showModal, setShowModal] = useState(false);
	const openModal = () => {
		setShowModal(true);
	};
	
	
	return (
		<div>
		<header>
		  <div className="menu-left">
			<button onClick={openModal} id="help-button" tabIndex="-1" className="icon">?</button>
				{showModal ? <HelpScreen setShowModal={setShowModal} /> : null}
		  </div>
		  <div className="title">
			Wordle
		  </div>
		  <div className="menu-right">
			
		  </div>
		</header>
	    <hr/><br/>
		<GameApp/>   
		</div>
	  );
}


export default App;
