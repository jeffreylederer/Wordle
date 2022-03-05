/* https://javascript.plainenglish.io/how-to-create-a-popup-modal-in-react-39315907998e */

import './Board/gamerow.css';
import './helpscreen.css';
import Gametile from './Board/Gametile';
import React, { useRef} from "react";
import ReactDom from "react-dom";


export const HelpScreen = ({ setShowModal }) => {
 // close the modal when clicking outside the modal.
 
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  
 
  
	return ReactDom.createPortal (
	<div className="container" ref={modalRef} onClick={closeModal}>
		  <section>
		  <h1>HOW TO PLAY
			
               <button className="gameicon" onClick={() => setShowModal(false)}>X</button>
		
		  </h1>
		  
		 
		  
		  	<div className="instructions">
			  <p>Guess the <strong>WORDLE</strong> in six tries.</p>
			  <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
			  <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
			  <div className="examples">
				<p><strong>Examples</strong></p>
				<div className="example">
				  <div className="row" display="grid">
					<Gametile letter="w" evaluation='correct'/>
					<Gametile letter="e"/>
					<Gametile letter="a"/>
					<Gametile letter="r"/>
					<Gametile letter="y"/>
				  </div>
				  <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>
				</div>
				<div className="example">
				  <div className="row" display="grid">
					<Gametile letter="p"/>
					<Gametile letter="i" evaluation="present"/>
					<Gametile letter="l"/>
					<Gametile letter="l"/>
					<Gametile letter="s"/>
				  </div>
				  <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>
				</div>
				<div className="example">
				  <div className="row" display="grid">
					<Gametile letter="v"/>
					<Gametile letter="a"/>
					<Gametile letter="g"/>
					<Gametile letter="u" evaluation="absent"/>
					<Gametile letter="e"/>
				  </div>
				  <p>The letter <strong>U</strong> is not in the word in any spot.</p>
				</div>
			  </div>
			  <p><strong>A new WORDLE will be available each day!</strong></p>
			</div>
			
		  </section>
		  </div>,
		  document.getElementById("portal")
	);
};

  
  