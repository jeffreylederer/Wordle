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
			   <button  className="one-and-a-half"  onClick={()=>onClick("Backspace")}>&lt;-</button>
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