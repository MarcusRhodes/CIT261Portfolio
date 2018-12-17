//This is the javascript for my SnapThat project
var video = document.getElementById("video");
var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');
var photo  = new Image();
var incremint = 0;

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
    //pause or play video
    if (video.paused) video.play();
    else video.pause();

    var dWidth, dHeight;
    // dimensions of cropped image          
    dWidth =  context.canvas.width;
    dHeight = context.canvas.height;         

    // draw the cropped image
    context.drawImage(video, 0, 0, dWidth, dHeight);
    
    //Hide or show buttons and video
    if (video.style.display != "none") {
        video.style.display = "none";
        document.getElementById("filter").style.diplay = "none";
        document.getElementById("share").style.diplay = "none";
    } else {
        video.style.display = "inline";
        document.getElementById("filter").style.diplay = "inline";
        document.getElementById("share").style.diplay = "inline";
    }
    return;
}

function filter() {
    //reset the context
    context.drawImage(video, 0, 0, context.canvas.width, context.canvas.height);
    //All the filters
    switch(++incremint) {
        case 1:
            context.fillStyle = "black";
            context.font = '48px serif';
            context.fillText('Hello from SnapThat', 50, 100); 
            context.filter = 'hue-rotate(100deg)';
            return;
        case 2:
            context.filter = 'hue-rotate(0deg)';
            context.filter = 'grayscale(100%)';
            return;
        case 3:
            context.filter = 'grayscale(0%)';
            context.filter = 'invert(100%)';
            return;
        case 4:
            context.filter = 'invert(0%)';
            context.filter = 'sepia(100%)';
            return;
        case 5:
            context.filter = 'sepia(0%)';
            return;
        case 6: 
            incremint = 0;
            return;
    }
}

// Converts canvas to an image
function convertCanvasToImage() {
	var image = new Image();
	image.src = canvas.toDataURL("image/png");
	return image;
}

const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/doeqfagak/upload';
const CLOUDINARY_UPLOAD_PRSET = 'zxcsl5dg';

function share() {
    var file = convertCanvasToImage();
    console.dir(file);

    var fd = new FormData();
    fd.append('file', file.src);
    fd.append('upload_preset', CLOUDINARY_UPLOAD_PRSET);

    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: fd
    }).then(function(res) {
        console.dir(res)
    }).catch(function(error) {
        console.dir(error);
    });
    return;
}
