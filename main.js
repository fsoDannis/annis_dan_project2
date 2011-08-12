function getItems(){
	if(localStorage.getItem('appwhatproject')){
		var timeValue			=	localStorage.getItem('appjobtime');
		var whatproject			= 	localStorage.getItem('appwhatproject');
		var comments			=	localStorage.getItem('appcomments');
		var sup					=	localStorage.getItem('appsuper');
		
		var viewAll = [
			timeValue,
			sup;
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
	// Attempt to get radio buttons 
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
}
	var sup; 

	
	localStorage.setItem('appwhatproject',whatproject);
	localStorage.setItem('appcomments', comments);
	localStorage.setItem('appjobtime', timeValue);
	localStorage.setItem('appsuper', sup);
}

// Console Log my selector to see if it works.
var sel				=	document.getElementById('jobtime');
var curOpt 			= 	sel.selectedIndex;
var value			= 	sel.options[sel.selectedIndex].text;

// Attempt to get radio buttons 
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
}
var sup; 
	
console.log(getRadioButtonValue('sup'));
console.log(sup);
console.log(sel);
console.log(curOpt);
console.log(value);