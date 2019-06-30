/*
	IN this file:
		1.Functions as events for "control panel" in monthes and necessary for that
*/
function nextMonth(){// event button "next"
	monthNumberGlobal+=1;
	if (monthNumberGlobal>11){
		yearGlobal+=1;
		monthNumberGlobal=0;
	}
	ifNecessaryActivateButton();
	showMonth(monthNumberGlobal,yearGlobal);
}
function previousMonth(){// event button "previous"
	monthNumberGlobal-=1;
	if (monthNumberGlobal<0){
		yearGlobal-=1;
		monthNumberGlobal=11;
	}
	ifNecessaryActivateButton();
	showMonth(monthNumberGlobal,yearGlobal);
}
function ifNecessaryActivateButton(){//activate button now if it is necessary
	let today=new Date();
	let monthNumberToday=today.getMonth();
	let yearToday=today.getFullYear();
	if ((monthNumberGlobal!=monthNumberToday)||(yearGlobal!=yearToday)){
		activateNowMonthButton();
	}else{
		disactivateNowMonthButton();
	}
}
function nowMonth(){// event button "now"
	let today=new Date();
	monthNumberGlobal=today.getMonth();
	yearGlobal=today.getFullYear();
	showMonth(monthNumberGlobal,yearGlobal);
	disactivateNowMonthButton();
}

function activateNowMonthButton(){
	let buttonNowMonth=document.getElementById('nowMonthButton');
	buttonNowMonth.classList.add('button-active');
	buttonNowMonth.classList.remove('button-notActive');
	buttonNowMonth.addEventListener('click',nowMonth);
}
function disactivateNowMonthButton(){
	let buttonNowMonth=document.getElementById('nowMonthButton');
	buttonNowMonth.classList.add('button-notActive');
	buttonNowMonth.classList.remove('button-active');
	buttonNowMonth.removeEventListener('click',nowMonth);
}