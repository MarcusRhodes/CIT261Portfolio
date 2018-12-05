//This is the javascript for my SnapThat project
//Facebook setup
// window.fbAsyncInit = function() {
//     FB.init({
//       appId            : '783361122002615',
//       autoLogAppEvents : true,
//       xfbml            : true,
//       version          : 'v3.2'
//     });
//   };

//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "https://connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));
// //change with your external photo url
// var imgURL="http://farm4.staticflickr.com/3332/3451193407_b7f047f4b4_o.jpg";
// FB.api('/album_id/photos', 'post', {
//     message:'Photo from SnapThat',
//     url:imgURL        
// }, function(response){

// if (!response || response.error) {
//     alert('Error occured');
// } else {
//     alert('Post ID: ' + response.id);
// }
// });
window.fbAsyncInit = function() {
    FB.init({
      appId      : '783361122002615',
      xfbml      : true,
      version    : 'v3.2'
    });
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            document.getElementById('status').innerHTML = 'We are connected.';
            document.getElementById('login').style.visibility = 'hidden';
        } else if (response.status === 'not_authorized') {
            document.getElementById('status').innerHTML = 'We are not logged in.'
        } else {
            document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
        }
    });
};
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
// login with facebook with extened publish_actions permission
function login() {
    FB.login(function(response) {
        if (response.status === 'connected') {
            document.getElementById('status').innerHTML = 'We are connected.';
            document.getElementById('login').style.visibility = 'hidden';
        } else if (response.status === 'not_authorized') {
            document.getElementById('status').innerHTML = 'We are not logged in.'
        } else {
            document.getElementById('status').innerHTML = 'You are not logged into Facebook.';
        }
    }, {scope: 'publish_actions'});
}

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

    if (video.paused) video.play();
    else video.pause();

    var dWidth, dHeight;
    debugger;
    // dimensions of cropped image          
    dWidth =  context.canvas.width;
    dHeight = context.canvas.height;         

    // draw the cropped image
    context.drawImage(video, 0, 0, dWidth, dHeight);
    // try {
    //     canvas.save();
    // } catch(e) {
    //     alert(e);
    // }
    //context2.drawImage(video, 0, 0, dWidth, dHeight);

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
    width =  context.canvas.width;
    height = context.canvas.height;
    switch(++incremint) {
        case 1:
            //context.save();
            context.filter = 'blur(5000px) opacity(0.6)';
            //context.filter = 'grayscale(100%) opacity(0.6)';
            return;
        case 2:
            var gradient = context.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "blue"); 
            gradient.addColorStop(1, "white"); 
            context.fillStyle = gradient; 
            context.fillRect(0, 0, width, height); 
            return;
        case 3:
            var gradient = context.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "red"); 
            gradient.addColorStop(1, "white"); 
            context.fillStyle = gradient; 
            context.fillRect(0, 0, width, height); 
            //context.strokeRect(0, 0, width, height);
            return;
        case 4:
            return;
        case 5:
            incremint = 0;
            //context.clearRect();
            //context.resetTransform();
            //context = canvas.getContext("2d");
            return;
    }
}

function share() {
    FB.api('/me/photos', 'post', {source: 'https://scontent-mxp1-1.xx.fbcdn.net/hphotos-xta1/v/t1.0-9/12107039_1513771898920585_3618649571988879636_n.jpg?oh=cef4dad7d2e036aa8eb48f42d51e7406&oe=56D8EC6A'}, function(response) {
				if (!response || response.error) {
					alert("Error!");
				} else {
					alert(response.id);
				}
			});


    return;
}