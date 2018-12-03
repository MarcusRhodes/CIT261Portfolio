

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



    var sx, sy, dx, dy;
    var sWidth, sHeight, dWidth, dHeight;

    // offset point to crop the image
    sx = xView;
    sy = yView;

    // dimensions of cropped image          
    sWidth =  context.canvas.width;
    sHeight = context.canvas.height;

    // if cropped image is smaller than canvas we need to change the source dimensions
    if(image.width - sx < sWidth){
        sWidth = image.width - sx;
    }
    if(image.height - sy < sHeight){
        sHeight = image.height - sy; 
    }

    // location on canvas to draw the croped image
    dx = 0;
    dy = 0;
    // match destination with source to not scale the image
    dWidth = sWidth;
    dHeight = sHeight;          

    // draw the cropped image
    context.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);

    //context.drawImage(video, 0, 0);

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