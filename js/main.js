function getItems(){
	if(localStorage.getItems('appjobTime')){
		var jobTime = localStorage.getItem('appjobTime');
		
		
		var viewAll=[
			jobTime
			];
			
			alert(viewAll);
}





function storeItems(id){
	var jobTime = document.getElementsByID('jobtime').value;
	localStorage.setItem('appjobTime',firstname);
}