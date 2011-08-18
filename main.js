// Define Vars
var sel				=	document.getElementById('jobtime');
var curOpt 			= 	sel.selectedIndex;
var value			= 	sel.options[sel.selectedIndex].text;
var sup; 				
var clearLink 		= 	document.getElementById('clear');
var anchorTags		=	clearLink.getElementsByTagName("a");

// Mouse Functions
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

//Getting the Items

function getItems(){
	if(localStorage.getItem('appwhatproject')){
		var timeValue			=	localStorage.getItem('appjobtime');
		var whatproject			= 	localStorage.getItem('appwhatproject');
		var comments			=	localStorage.getItem('appcomments');
		var sup					= 	localStorage.getItem('appSuperName');
		var rangeSlider			=	localStorage.getItem('appRange');
		
		/* var viewAll = [
			timeValue,
			sup,
			whatproject,
			rangeSlider,
			comments
		];	
		alert(viewAll); */
	
		document.getElementById('main').style.display = "none";
		document.getElementById('storedItems').style.display = "block";
		var pic = localStorage.getItem('appSuperName');
		 if (pic=="Dan Annis") {
        document.getElementById("namepic1").style.display ="block";
  		  }else if (pic=="Ken Senter") {
        document.getElementById("namepic2").style.display ="block";
        }else if (pic=="Matt Vornberg") {
        document.getElementById("namepic3").style.display ="block";
        }else if (pic=="Kristy Hardin") {
        document.getElementById("namepic4").style.display ="block";
        }else if (pic=="Fred Lattimore") {
        document.getElementById("namepic5").style.display ="block";
        }
		document.getElementById('results').innerHTML = 
		"<div>"+ "Project Name: " + whatproject +"<p />"
		+ "Supervisor's Name: " + sup +"<p />"
		+ "Assignment Time: " + timeValue +"<p />"
		+ "How Many times will this be done: " + rangeSlider +"<p />"
		+ "Any Additional Comments: " + comments +"<p />"
		
		"</div>"
		
		
		;
		clearLink.style.display = "block";


	} 	else {
		 var whatproject			= 	'Please Enter the Project Name.';
		document.getElementById('whatproject').value  = whatproject;
		 
	}
}

//Storing Items

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

// Checking which buttons are pressed

function getRadioButtonValue(){
	var radioLength = document.forms[0].sup.length;
	for (i=0; i < radioLength; i++){
		if(document.forms[0].sup[i].checked == true){
			sup = document.forms[0].sup[i].value;
		}
	}
}

// Clearing Local Storage

function clearLocal(){
	localStorage.clear();
	return false;
	}

//Validating Fields

function validateForm(){
	var getProject = document.forms[0]['whatproject'].value;
	if(getProject == ""){
		document.getElementById('whatproject').style.border = "1px solid red";
		var encourage = prompt('What is the Project Name?',"");
		if (encourage != null && encourage !=""){
			document.forms[0]['whatproject'].value=encourage;
		}
		return false;
	} else{
		document.getElementById('whatproject').style.border ="1px solid #ccc";
	}
	alert('Form is Valid.. Ship It!');
	
}
	
