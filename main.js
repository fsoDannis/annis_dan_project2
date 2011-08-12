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
		document.getElementById('main').style.display="none";
		var clearLink= document.getElementById('clear');
		clearLink.style.display ="block";
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

function clearLocal(){
	localStorage.clear();
	return false;
}	

var sup;  // just couldn't get the radials to work! 

function getRadioButtonValue(){
	var radioLength = document.forms[0].sup.length;
//Find out how many radio buttons there are with the name of sup.
	for (i=0; i < radioLength; i++){
//Loop through each radio button and find out which one is checked.
	if(document.forms[0].sup[i].checked == true){
//When we find the radio button that's checked, set the sup var to the value of the radio button.
		sup = document.forms[0].sup[i].value;
		}
	}
} //Radials no worky.

