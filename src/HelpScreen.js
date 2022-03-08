/* https://javascript.plainenglish.io/how-to-create-a-popup-modal-in-react-39315907998e */

import './helpscreen.css';
import Tile from './Tile';
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
			<header>
				<button className="game-icon" onClick={() => setShowModal(false)}>
					<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
						<path fill="var(--color-tone-1)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
					</svg>
				</button>
		

				<h1>HOW TO PLAY</h1>
			</header>
			
    <div class="instructions">
      <p>Guess the <strong>WORDLE</strong> in six tries.</p>
      <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
      <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
      <div class="examples">
        <p><strong>Examples</strong></p>
        <div class="example">
          <div class="row">
            <Tile letter="w" evaluation="correct" reveal=""></Tile>
            <Tile letter="e"></Tile>
            <Tile letter="a"></Tile>
            <Tile letter="r"></Tile>
            <Tile letter="y"></Tile>
          </div>
          <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>
        </div>
        <div class="example">
          <div class="row">
            <Tile letter="p"></Tile>
            <Tile letter="i" evaluation="present" reveal=""></Tile>
            <Tile letter="l"></Tile>
            <Tile letter="l"></Tile>
            <Tile letter="s"></Tile>
          </div>
          <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>
        </div>
        <div class="example">
          <div class="row">
            <Tile letter="v"></Tile>
            <Tile letter="a"></Tile>
            <Tile letter="g"></Tile>
            <Tile letter="u" evaluation="absent" reveal=""></Tile>
            <Tile letter="e"></Tile>
          </div>
          <p>The letter <strong>U</strong> is not in the word in any spot.</p>
        </div>
      </div>
      <p><strong>A new WORDLE will be available each day!<strong></strong></strong></p><strong><strong>
    </strong></strong></div><strong><strong>
  </strong></strong></section>
  </div>,
		 document.getElementById("portal")
	);
};

  
  