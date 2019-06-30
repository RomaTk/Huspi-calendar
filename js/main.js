/*
	IN this file:
		1.Global variables are injected
		2.Starts all process
*/
function main(){
	//add main events for static buttons
	document.getElementById('nextMonthButton').addEventListener('click',nextMonth);
	document.getElementById('previousMonthButton').addEventListener('click',previousMonth);
	document.getElementById('cancelSaveButton').addEventListener('click',closeModalWindowWithoutSave);
	document.getElementById('acceptSaveButton').addEventListener('click',closeModalWindowWithSave);
	//open now month
	let today=new Date();
	monthNumberGlobal=today.getMonth();
	yearGlobal=today.getFullYear();
	showMonth(monthNumberGlobal,yearGlobal);
}
//Inject global variables
const monthes=['January','February','March','April','May','June','July','August','September','October','November','December'];
var DayNumberGlobal=0;
var monthNumberGlobal=0;
var yearGlobal=0;
var dayNumberDivGlobal=null;//variable is made for change while button "save" is clicked

main();