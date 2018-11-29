

var video = document.getElementById("video");
var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || 
    navigator.mozGetUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia;

if (navigator.getUserMedia) {
    navigator.getUserMedia({video:true}, streamWebCam, throwError);
}

function streamWebCam(stream) {
    //console.dir(stream);
    video.src = stream;//window.URL.createObjectURL(stream);//stream;
    video.play();//This isn't working:...
}

function throwError (e) {
    alert(e);
    console.dir(e);
}

function snap() {
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;
    canvas.drawImage(video, 0, 0);
}

function filter() {
    return;
}

function share() {
    return;
}