function getItems(){
	if(localStorage.getItem('appwhatproject')){
		var timeValue			=	localStorage.getItem('appjobtime');
		var whatproject			= 	localStorage.getItem('appwhatproject');
		var comments			=	localStorage.getItem('appcomments');
	
		var viewAll = [
			timeValue,
			whatproject,
			comments,
		];
			
		alert(viewAll);
	}
}


function storeItems(id){
	var whatproject		= 	document.getElementById('whatproject').value;
	var comments		=	document.getElementById('comments').value;
	// getting my selector Items
	var selTime			=	document.getElementById('jobtime');
	var timeValue		= 	selTime.options[sel.selectedIndex].text;
	
	
	localStorage.setItem('appwhatproject',whatproject);
	localStorage.setItem('appcomments', comments);
	localStorage.setItem('appjobtime', timeValue);

}


