document.getElementById("demo").innerHTML = "00d, 00h: 00m: 00s";
function myFunction(){
	var input = prompt("Enter Ending time : (Example:December 17, 1995 03:24:00)");
	var dest = new Date(input).getTime();

		var x = setInterval(function(){
		var now = new Date().getTime();

		var diff = dest - now;
		var days = Math.floor(diff/(1000*60*60*24));
		var hours = Math.floor((diff % (1000*60*60*24))/(1000*60*60));
		var minutes = Math.floor((diff % (1000*60*60))/(1000*60));
		var seconds = Math.floor((diff % (1000*60))/1000);

		document.getElementById("demo").innerHTML = days + "d, " + hours + "h: " + minutes + "m: " + seconds + "s";
		

		if(days ===0 && hours===0 && minutes===0 && seconds===0){
			clearInterval(x);
			document.getElementById("demo").innerHTML = "00d, 00h: 00m: 00s";
		}

		if(days<0 || hours<0 || minutes<0 || seconds<0){
			clearInterval(x);
			document.getElementById("demo").innerHTML = "00d, 00h: 00m: 00s";
		}
		},1000);

}

//aug 27, 2021 14:16:00