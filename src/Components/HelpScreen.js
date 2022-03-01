/* https://javascript.plainenglish.io/how-to-create-a-popup-modal-in-react-39315907998e */


import './help.css';
import Tile from './Board/Tile';
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
		  <div className="float">
		  <button onClick={() => setShowModal(false)}>X</button>
		  </div>
		  </h1>
		  
		  
		  
		  	<div className="instructions">
			  <p>Guess the <strong>WORDLE</strong> in six tries.</p>
			  <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
			  <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
			  <div className="examples">
				<p><strong>Examples</strong></p>
				<div className="example">
				  <div className="gamerow">
					<Tile letter="w" evaluation='correct'/>
					<Tile letter="e"/>
					<Tile letter="a"/>
					<Tile letter="r"/>
					<Tile letter="y"/>
				  </div>
				  <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>
				</div>
				<div className="example">
				  <div className="gamerow">
					<Tile letter="p"/>
					<Tile letter="i" evaluation="present"/>
					<Tile letter="l"/>
					<Tile letter="l"/>
					<Tile letter="s"/>
				  </div>
				  <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>
				</div>
				<div className="example">
				  <div className="gamerow">
					<Tile letter="v"  />
					<Tile letter="a"  />
					<Tile letter="g"  />
					<Tile letter="u" evaluation="absent"/>
					<Tile letter="e"  />
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
  
  