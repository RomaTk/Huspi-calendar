/*
	IN this file: 
		1.Functions for creating elements; 
		2.Functions showing elements
*/
function showMonth(monthNumber,year){//month is integer 0-11; year is integer
	let numberOfDaysInMonth=new Date(year , monthNumber+1, 0).getDate();
	let divToIllustrate=document.getElementById('illustratingMonthDiv');
	divToIllustrate.style.opacity=0;
	document.getElementById('dateUnderCalendarMonth').style.opacity=0;
	divToIllustrate.innerHTML='';
	for (let dayNumber=0; dayNumber<numberOfDaysInMonth; dayNumber+=1){
		divToIllustrate.appendChild(takeDay(year,monthNumber+1,dayNumber));
	}
	setTimeout(function(){
		document.getElementById('illustratingMonthDiv').style.opacity=1;
		document.getElementById('dateUnderCalendarMonth').innerText=monthes[monthNumber]+", "+year;
		document.getElementById('dateUnderCalendarMonth').style.opacity=1;
	},200);/* if you will change, than you should change in style of div id"dateUnderCalendarMonth" transition -> opacityand in style of div id"illustratingMonthDiv" transition -> opacity*/
	
}

function takeDay(year,monthNumber,dayNumber){//month is integer 1-12; year is integer;day is integer
	let dayDiv=document.createElement('div');
	dayDiv.classList.add('dayDiv');
	let dayNumberDiv=document.createElement('div');
	dayNumberDiv.classList.add('dayNumberDiv');
	dayNumberDiv.innerText=dayNumber+1;
	dayNumberDiv.classList.add('dayNumberDiv');
	let dayText=document.createElement('div');
	dayText.innerText=takeTextAboutDay(dayNumber,monthNumber-1,year);//take info from storage
	dayText.classList.add('dayText');
	dayDiv.appendChild(dayNumberDiv);
	dayDiv.appendChild(dayText);
	dayDiv.dayNumber=dayNumber;//it is used in the future
	dayDiv.addEventListener('click', goToModalWindow);
	return dayDiv;
}

function showModalWindow(text){// text - variable as text to textarea
	let grayBackgroundForModalWindow=document.getElementById('grayBackgroundForModalWindow');
	grayBackgroundForModalWindow.style.opacity='1';
	grayBackgroundForModalWindow.style.display='flex';
	let textarea=document.getElementById('writeToDateTextarea');
	textarea.value=text;
}

function hideModalWindow(){
	let grayBackgroundForModalWindow=document.getElementById('grayBackgroundForModalWindow');
	grayBackgroundForModalWindow.style.opacity='0';
	setTimeout(function(){ document.getElementById('grayBackgroundForModalWindow').style.display='none'},200); /* if you will change, than you should change in style of div with id "grayBackgroundForModalWindow" transition-> opacity */
}