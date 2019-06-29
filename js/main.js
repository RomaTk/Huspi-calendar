function main(){
	let today=new Date();
	monthNumberGlobal=today.getMonth();
	yearGlobal=today.getFullYear();
	showMonth(monthNumberGlobal,yearGlobal);
}
var monthNumberGlobal=0;//used as global variable
var yearGlobal=0;//used as global variable
document.getElementById('nextMonthButton').addEventListener('click',nextMonth);
document.getElementById('previousMonthButton').addEventListener('click',previousMonth);
main();