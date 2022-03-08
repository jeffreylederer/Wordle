import './gamekeyboard.css';


function Keyboardrow({letters,onClick, lines, answer}) {

	
	
	if(letters === 'qwertyuiop')
	{
		return (
		
			<div className='row'>
			   <button data-state = {datastate(lines, answer, 'q')} onClick={()=>onClick('q')}>q</button>
			   <button data-state = {datastate(lines, answer, 'w')} onClick={()=>onClick('w')}>w</button>
			   <button data-state = {datastate(lines, answer, 'e')} onClick={()=>onClick('e')}>e</button>
			   <button data-state = {datastate(lines, answer, 'r')} onClick={()=>onClick('r')}>r</button>
			   <button data-state = {datastate(lines, answer, 't')} onClick={()=>onClick('t')}>t</button>
			   <button data-state = {datastate(lines, answer, 'y')} onClick={()=>onClick('y')}>y</button>
			   <button data-state = {datastate(lines, answer, 'u')} onClick={()=>onClick('u')}>u</button>
			   <button data-state = {datastate(lines, answer, 'i')} onClick={()=>onClick('i')}>i</button>
			   <button data-state = {datastate(lines, answer, 'o')} onClick={()=>onClick('o')}>o</button>
			   <button data-state = {datastate(lines, answer, 'p')} onClick={()=>onClick('p')}>p</button>
			   
			</div>
		);
	} else if(letters === 'asdfghjkl') {
		  return ( 
		  <div className='row'>
			   <div className="spacer half" />
			   <button data-state = {datastate(lines, answer, 'a')} onClick={()=>onClick('a')}>a</button>
			   <button data-state = {datastate(lines, answer, 's')} onClick={()=>onClick('s')}>s</button>
			   <button data-state = {datastate(lines, answer, 'd')} onClick={()=>onClick('d')}>d</button>
			   <button data-state = {datastate(lines, answer, 'f')} onClick={()=>onClick('f')}>f</button>
			   <button data-state = {datastate(lines, answer, 'g')} onClick={()=>onClick('g')}>g</button>
			   <button data-state = {datastate(lines, answer, 'h')} onClick={()=>onClick('h')}>h</button>
			   <button data-state = {datastate(lines, answer, 'j')} onClick={()=>onClick('j')}>j</button>
			   <button data-state = {datastate(lines, answer, 'k')} onClick={()=>onClick('k')}>k</button>
			   <button data-state = {datastate(lines, answer, 'l')} onClick={()=>onClick('l')}>l</button>
			   <div className="spacer half" />
		   </div>
		   );
		  
		} else {
			return (
			<div className='row'>
			   <button  className="one-and-a-half" onClick={()=>onClick("Enter")}>Enter</button>
			   <button data-state = {datastate(lines, answer, 'z')} onClick={()=>onClick('z')}>z</button>
			   <button data-state = {datastate(lines, answer, 'x')} onClick={()=>onClick('x')}>x</button>
			   <button data-state = {datastate(lines, answer, 'c')} onClick={()=>onClick('c')}>c</button>
			   <button data-state = {datastate(lines, answer, 'v')} onClick={()=>onClick('v')}>v</button>
			   <button data-state = {datastate(lines, answer, 'b')} onClick={()=>onClick('b')}>b</button>
			   <button data-state = {datastate(lines, answer, 'n')} onClick={()=>onClick('n')}>n</button>
			   <button data-state = {datastate(lines, answer, 'm')} onClick={()=>onClick('m')}>m</button>
			   <button  className="one-and-a-half"  onClick={()=>onClick("Backspace")}>
					<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
						<path fill="var(--color-tone-1)" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
					</svg>
			   </button>
		</div>
		);
	}
}

function datastate(lines, answer, letter) {
	for(var i = 0; i< lines.length; i++) {
		let line = lines[i].trim().replace('\n','');
			if(line.length>0) {
			for(var j = 0; j < line.length; j++) {
				if(line[j] == letter && line[j] === answer[j]) {
					return "correct";
				}
				if(answer.search(letter) >= 0 && line[j].search(letter)>=0) {
					return "present";
				}
			}
		}
		
	}
	return "absent";	
}


export default Keyboardrow;