

var video = document.getElementById("video");
var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || 
    navigator.mozGetUserMedia || navigator.oGetUserMedia || navigator.msGetUserMedia;//navigator.mediaDevices.getUserMedia

if (navigator.getUserMedia) {
    navigator.getUserMedia({video:true}, streamWebCam, throwError);
}

function streamWebCam(stream) {
    try {
        video.srcObject = stream;
    } catch (error) {
        video.src = window.URL.createObjectURL(stream);
    }
    video.play();
}

function throwError (e) {
    alert(e);
    console.dir(e);
}

function snap() {
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;

    var context = canvas.getContext("2d");

    if (video.paused) video.play();
    else video.pause();

    context.drawImage(video, 0, 0);

    if (video.style.display != "none") {
        video.style.display = "none";
        document.getElementById("filter").style.diplay = "none";
        document.getElementById("share").style.diplay = "none";
    } else {
        video.style.display = "inline";
        document.getElementById("filter").style.diplay = "inline";
        document.getElementById("share").style.diplay = "inline";
    }
}

function filter() {

    return;
}

function share() {
    return;
}