import './keyboard.css';
import Keybutton from './Keybutton';
import Largebutton from './Largebutton';

function Keyboardrow({letters,onClick, foundLetters, correctLetters, usedLetters}) {

	
	
	if(letters === 'qwertyuiop')
	{
		return (
			<div className='keyboardrow'>
			   <Keybutton datakey={letters[0]} onClick={()=>onClick(letters[0])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[1]} onClick={()=>onClick(letters[1])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[2]} onClick={()=>onClick(letters[2])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[3]} onClick={()=>onClick(letters[3])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[4]} onClick={()=>onClick(letters[4])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[5]} onClick={()=>onClick(letters[5])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[6]} onClick={()=>onClick(letters[6])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[7]} onClick={()=>onClick(letters[7])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[8]} onClick={()=>onClick(letters[8])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[9]} onClick={()=>onClick(letters[9])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			</div>
		);
	} else if(letters === 'asdfghjkl') {
		  return ( 
		  <div className='keyboardrow'>
			   <Halfbutton  foundLetters={foundLetters} correctLetters={correctLetters} />
			   <Keybutton datakey={letters[0]} onClick={()=>onClick(letters[0])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[1]} onClick={()=>onClick(letters[1])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[2]} onClick={()=>onClick(letters[2])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[3]} onClick={()=>onClick(letters[3])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[4]} onClick={()=>onClick(letters[4])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[5]} onClick={()=>onClick(letters[5])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[6]} onClick={()=>onClick(letters[5])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[7]} onClick={()=>onClick(letters[7])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[8]} onClick={()=>onClick(letters[8])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
		   </div>
		   );
		  
		} else {
			return (
			<div className='keyboardrow'>
			   <Largebutton datakey="Enter" onClick={()=>onClick("Enter")}  />
			   <Keybutton datakey={letters[0]} onClick={()=>onClick(letters[0])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[1]} onClick={()=>onClick(letters[1])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[2]} onClick={()=>onClick(letters[2])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[3]} onClick={()=>onClick(letters[3])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[4]} onClick={()=>onClick(letters[4])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[5]} onClick={()=>onClick(letters[5])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Keybutton datakey={letters[6]} onClick={()=>onClick(letters[6])} foundLetters={foundLetters} correctLetters={correctLetters} usedLetters={usedLetters}/>
			   <Largebutton datakey="<-" onClick={()=>onClick("Backspace")} />
		</div>
		);
	}
}

function Halfbutton() {
	return (
		<span className="halfspacer" >..</span>
	)
}


export default Keyboardrow;