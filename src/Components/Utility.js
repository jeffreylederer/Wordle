
function GetDateIndex() {
	let s = new Date(2021, 5, 19, 0, 0, 0, 0);
	let a =new Date();
	let t = new Date(a).setHours(0, 0, 0, 0) - s.setHours(0, 0, 0, 0);
	return Math.round(t / 864e5);
}
		
export default GetDateIndex;		