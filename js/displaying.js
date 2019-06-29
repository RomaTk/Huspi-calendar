const monthes=['January','February','March','April','May','June','July','August','September','October','November','December'];
function showMonth(monthNumber,year){//month is integer 0-11; year is integer
	let numberOfDaysInMonth=new Date(year , monthNumber+1, 0).getDate();
	let divToIllustrate=document.getElementById('illustratingMonthDiv');
	divToIllustrate.innerHTML='';
	for (let dayNumber=0; dayNumber<numberOfDaysInMonth; dayNumber+=1){
		divToIllustrate.appendChild(takeDay(year,monthNumber+1,dayNumber));
	}
	document.getElementById('dateUnderCalendarMonth').innerText=monthes[monthNumber]+", "+year;
}

function takeDay(year,monthNumber,dayNumber){//month is integer 0-11; year is integer;day is integer
	let dayDiv=document.createElement('div');
	dayDiv.classList.add('dayDiv');
	let dayNumberDiv=document.createElement('div');
	dayNumberDiv.classList.add('dayNumberDiv');
	dayNumberDiv.innerText=dayNumber+1;
	dayNumberDiv.classList.add('dayNumberDiv');
	dayDiv.appendChild(dayNumberDiv);
	return dayDiv;
}