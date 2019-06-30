/*
	IN this file:
		1.Functions to work with modal window as events mainly
*/
function goToModalWindow(e){// e - object returned in click as event. Click on an object with class "dayDiv"
	dayNumberDivGlobal=e.currentTarget;
	DayNumberGlobal=e.currentTarget.dayNumber;
	showModalWindow(takeTextAboutDay(DayNumberGlobal,monthNumberGlobal,yearGlobal));
}
function closeModalWindowWithSave(){//Click on an object with id "acceptSaveButton"
	saveTextAboutDay(DayNumberGlobal,monthNumberGlobal,yearGlobal,document.getElementById('writeToDateTextarea').value);
	dayNumberDivGlobal.getElementsByClassName('dayText')[0].innerText=document.getElementById('writeToDateTextarea').value;
	hideModalWindow();
}
function closeModalWindowWithoutSave(){//Click on an object with id "cancelSaveButton"
	hideModalWindow();
}