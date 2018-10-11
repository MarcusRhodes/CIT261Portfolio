var treatv = 0;
var trickv = 0;
window.addEventListener("load", event => {
    	if (getCookie("treats") == "" || getCookie("tricks") == "") {
			setCookie("treats", treatv, 1);
			setCookie("tricks", trickv, 1);
		}
	});
	

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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

function checkCookie(cname) {
    var c = getCookie(cname);
    if (c != "") {
        alert(c);
    } else {
        alert("Uh Oh");
    }
}
/*
button.addEventListener("ontouchend", event => {
    	if (false) {
			
		}
	}, false);
*/

function treat() {
	treatv++;
    setCookie("treats", treatv, 0.5);    
    checkCookie("treats");
    //document.getElementById('div1').innerHTML = null;
    //document.getElementById('div1').innerHTML = "A TREAT!<br>You have " + getCookie(_treats) + " treats!";
    return;
}
function trick() {
	trickv++;
    setCookie("tricks", trickv, 0.5);
    checkCookie("tricks");
    //document.getElementById('div1').innerHTML = null;
    //document.getElementById('div1').innerHTML = "A TRICK!<br>You have tricked " + getCookie(_tricks) + " people!";
    return;
}
function saveToTreat(val) {
	document.cookie = "_treats=treats; expires=Nov 1; path=/";
}
function savetoTrick(val) {
	document.cookie = "_tricks=tricks; expires=Nov 1; path=/";
}