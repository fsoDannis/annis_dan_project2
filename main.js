// Define Vars
var sel				=	document.getElementById('jobtime');
var curOpt 			= 	sel.selectedIndex;
var value			= 	sel.options[sel.selectedIndex].text;
var sup; 				
var clearLink 		= 	document.getElementById('clear');
var anchorTags		=	clearLink.getElementsByTagName("a");

function mouseHover(){
	for( var i=0, j=anchorTags.length; i < j; i++){
		anchorTags[i].style.color = "#424242";
		}
	}
	
function mouseOut(){
	for( var i=0, j=anchorTags.length; i<j; i++){
		anchorTags[i].style.color = "#424242";
		}
	}


function getItems(){
	if(localStorage.getItem('appwhatproject')){
		var timeValue			=	localStorage.getItem('appjobtime');
		var whatproject			= 	localStorage.getItem('appwhatproject');
		var comments			=	localStorage.getItem('appcomments');
		var sup					= 	localStorage.getItem('appSuperName');
		var rangeSlider			=	localStorage.getItem('appRange');
		
		var viewAll = [
			timeValue,
			whatproject,
			comments,
			sup,
			rangeSlider
			
		];
			
		alert(viewAll);
		document.getElementById('main').style.display = "none";
		clearLink.style.display = "block";
	} 	else {
		var comments			=	'Please enter some additional comments';
		var whatproject			= 	'Please Enter the Project Name.';
		
		document.getElementById('comments').value     = comments;
		document.getElementById('whatproject').value  = whatproject;
	}
}


function storeItems(id){
	getRadioButtonValue();
	var whatproject		= 	document.getElementById('whatproject').value;
	var comments		=	document.getElementById('comments').value;
	var selTime			=	document.getElementById('jobtime');
	var timeValue		= 	selTime.options[sel.selectedIndex].text;
	var rangeSlider      = 	document.getElementById('slider').value;
	
	
	
	localStorage.setItem('appwhatproject',whatproject);
	localStorage.setItem('appcomments', comments);
	localStorage.setItem('appjobtime', timeValue);
	localStorage.setItem('appSuperName', sup);
	localStorage.setItem('appRange', rangeSlider);
	
	
}

function getRadioButtonValue(){
	var radioLength = document.forms[0].sup.length;
	for (i=0; i < radioLength; i++){
		if(document.forms[0].sup[i].checked == true){
			sup = document.forms[0].sup[i].value;
		}
	}
}

function clearLocal(){
	localStorage.clear();
	return false;
	}

