window.addEventListener("load", event => {
    if (!document.cookie.value) {
		setCookie("treats", 0, 1.5);
		setCookie("tricks", 0, 1.5);
	}
	if (localStorage.getItem("treatntrick") == "null") {
		list[0] = [{
			"treat": false,
   			"x": 0.0,
   			"y": 0.0
		}];
		localStorage.setItem("treatntrick", JSON.stringify(list));
	}
});

	
function setCookie(cname, cvalue, exdays) {
	let savedCookie = getCookie(cname);
	if (savedCookie == "") savedCookie = 0;
	if (savedCookie == 0) {
    	var d = new Date();
    	d.setTime(d.getTime() + (exdays*24*60*60*1000));
    	var expires = "expires=" + d.toGMTString();
    	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    } else {
    	document.cookie = cname + "=" + (parseInt(savedCookie) + cvalue) + ";" + expires + ";path=/";
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie() {
	document.cookie = "treats=0;expires=;path=/";
	document.cookie = "tricks=0;expires=;path=/";
}

function treat() {
    setCookie("treats", 1, 0.5);
    flag = true;
    addFlag();
    document.getElementById('div2').innerHTML = null;
    document.getElementById('div1').innerHTML = "A TREAT!<br>You have " + getCookie("treats") + " treats!";
    return;
}

function trick() {
    setCookie("tricks", 1, 0.5);
    flag = false;
    addFlag();
    document.getElementById('div1').innerHTML = null;
    document.getElementById('div2').innerHTML = "A TRICK!<br>You have tricked " + getCookie("tricks") + " people!";
    return;
}
/*
var mymap = L.map('mapid').setView([43.818353, -111.782335], 16);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibWFyY3VzcmhvZGVzIiwiYSI6ImNqbjZlOGxxbTAybnYzcXFpcjd6djVvcnYifQ.zggwq7w18xjNoIHn2tqg3g'
}).addTo(mymap);
var marker = L.marker([43.818353, -111.782335]).addTo(mymap);*/

	
var flag = false;
var list = [{
	"treat": true,
    "x": 0,
    "y": 0
}];


var treatIcon = L.icon({
    iconUrl: 'treat.png',
    iconSize:     [165, 165], // size of the icon
    iconAnchor:   [20, 55] // point of the icon which will correspond to marker's location
});

var trickIcon = L.icon({
    iconUrl: 'trick.png',
    iconSize:     [170, 170], // size of the icon
    iconAnchor:   [20, 55] // point of the icon which will correspond to marker's location
});

function addFlag() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(addPosition);
    } else {
        alert("This app requires your location to work!");
    }
}

function addPosition(position) {
   	
	var stuff = localStorage.getItem("treatntrick");
	var output = JSON.parse(stuff);
	if (output.length > 1) {
		output.push({
			"treat":flag,
			"x":position.coords.latitude,
			"y":position.coords.longitude
		});
		localStorage.setItem("treatntrick", JSON.stringify(output));
		console.dir(output[1].treat);
	} else {
		list[0] = [{
			"treat": false,
   			"x": 0.0,
   			"y": 0.0
		}];
		localStorage.setItem("treatntrick", JSON.stringify(list));
		output.push({
			"treat":flag,
			"x":position.coords.latitude,
			"y":position.coords.longitude
		});
		localStorage.setItem("treatntrick", JSON.stringify(output));
		console.dir(output[1].treat);
	}
}
	var mymap = L.map('mapid').setView([43.818353, -111.782335], 16);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	    maxZoom: 18,
    	id: 'mapbox.streets',
    	accessToken: 'pk.eyJ1IjoibWFyY3VzcmhvZGVzIiwiYSI6ImNqbjZlOGxxbTAybnYzcXFpcjd6djVvcnYifQ.zggwq7w18xjNoIHn2tqg3g'
	}).addTo(mymap);
	var marker = L.marker([43.818353, -111.782335]).addTo(mymap);

function makeMap() {
	
	if (mymap == null) {
		mymap = L.map('mapid').setView([43.818353, -111.782335], 16);
		L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		    maxZoom: 18,
    		id: 'mapbox.streets',
    		accessToken: 'pk.eyJ1IjoibWFyY3VzcmhvZGVzIiwiYSI6ImNqbjZlOGxxbTAybnYzcXFpcjd6djVvcnYifQ.zggwq7w18xjNoIHn2tqg3g'
		}).addTo(mymap);
	}
	
	var stuff = localStorage.getItem("treatntrick");
	var output = JSON.parse(stuff);
	if (output.length > 1) {
		for (let i = 1; i < output.length; i++) {//MAKE FOREACH
			console.dir(output[i].treat);
			if (output[i].treat == true) {
				L.marker([output[i].x, output[i].y], {icon: treatIcon}).addTo(mymap);
			} else {
				L.marker([output[i].x, output[i].y], {icon: trickIcon}).addTo(mymap);
			}
		}
		document.getElementById("mapid").style.visibility = "visible";
		document.getElementById("hide").style.visibility = "visible";
	} else {
		alert("You need to get a treat or do a trick before that!");
	}
}

function hideMap() {
	document.getElementById("mapid").style.visibility = "hidden";
	document.getElementById("hide").style.visibility = "hidden";
}

function clearList() {
	setCookie("treats", 0, 1.5);
	setCookie("tricks", 0, 1.5);
	list[0] = [{
		"treat": false,
		"x": 0.0,
		"y": 0.0
	}];
	localStorage.setItem("treatntrick", JSON.stringify(list));
	//L.marker.clearLayers();
	deleteCookie();
	mymap.remove();
	mymap = null;
	document.getElementById("mapid").style.visibility = "hidden";
	document.getElementById("hide").style.visibility = "hidden";
}



