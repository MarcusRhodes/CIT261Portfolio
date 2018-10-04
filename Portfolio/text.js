function onLoad() {
	if (getCookie(_treats) == "" || getCookie(_trick) == "") {
		document.cookie = "_treats=0; expires=Thu, 01 Nov 2018 00:00:00 UTC; path=/";
		document.cookie = "_trick=0; expires=Thu, 01 Nov 2018 00:00:00 UTC; path=/";
	}
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
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

function treat() {
    //alert("WORKS");
    treats += 1;
    document.getElementById('div1').innerHTML = null;
    document.getElementById('div1').innerHTML = "A TREAT!<br>You have " + getCookie(_treats) + " treats!";
    return;
}
function trick() {
    //alert("WORKS");
    tricks += 1;
    document.getElementById('div1').innerHTML = null;
    document.getElementById('div1').innerHTML = "A TRICK!<br>You have tricked " + getCookie(_tricks) + " people!";
    return;
}
function saveToTreat(val) {
	document.cookie = "_treats=treats; expires=Nov 1; path=/";
}
function savetoTrick(val) {
	document.cookie = "_tricks=tricks; expires=Nov 1; path=/";
}