/*
	IN this file:
		1.Functions to work with localStorage
*/
function makeStringToTakeInfo(dayNumber,monthNumber,year){// name of item in local storage
	return dayNumber+' '+monthNumber+' '+year;
}

function takeTextAboutDay(dayNumber,monthNumber,year){
	let nameOfItem=makeStringToTakeInfo(dayNumber,monthNumber,year);
	let item=localStorage.getItem(nameOfItem);
	if (item){
		return item;
	}else{
		return '';
	}
}
function saveTextAboutDay(dayNumber,monthNumber,year,text){// text is variable to save as item in local storage
	let nameOfItem=makeStringToTakeInfo(dayNumber,monthNumber,year);
	localStorage.setItem(nameOfItem, text);
}