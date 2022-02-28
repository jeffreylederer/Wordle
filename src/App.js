import React, { useState } from "react";
import Game from './Components/Game';
import {HelpScreen} from './Components/HelpScreen';
import './App.css';

function App(){
	const [showModal, setShowModal] = useState(false);
	const openModal = () => {
		setShowModal(true);
	};
	
	
	return (
		<div>
		<header>
		  <div className="menu-left">
			<button onClick={openModal}>?</button>
				{showModal ? <HelpScreen setShowModal={setShowModal} /> : null}
		  </div>
		  <div className="title">
			Wordle
		  </div>
		  <div className="menu-right">
			
		  </div>
		</header>
	    <hr/><br/>
		<Game/>   
		</div>
	  );
}


export default App;
