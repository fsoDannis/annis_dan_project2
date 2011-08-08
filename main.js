function getItems(){
	if(localStorage.getItem('appwhatproject')){
		var whatproject		= 	localStorage.getItem('appwhatproject');
		var comments		=	localStorage.getItem('appcomments');
		
		var viewAll = [
			whatproject,
			comments
		];
			
		alert(viewAll);
	}
}


function storeItems(id){
	var whatproject		= 	document.getElementById('whatproject').value;
	var comments		=	document.getElementById('comments').value;
	
	localStorage.setItem('appwhatproject',whatproject);
	localStorage.setItem('appcomments', comments);
}