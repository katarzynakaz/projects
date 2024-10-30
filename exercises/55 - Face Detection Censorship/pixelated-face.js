// The face detection does not work on all browsers and operating systems.
// If you are getting a `Face detection service unavailable` error or similar,
// it's possible that it won't work for you at the moment.


// access user webcam

//dump to video element

//take frames of vidoe and put squares on persons face
// 1 ----------------- grab cibsts 
const video = document.querySelector('webcam');

const canvas = document.querySelector('video');
const ctx = canvas.getContext('2d');
//2 --------------------- grab context
ctx.strokeStyle = '#ffc600';
ctx.lineWidth = 2;

const faceCanvas = document.querySelector('face');
const faceCtx = canvas.getContext('2d');

//3----------------- make new face detector
const faceDetector = new window.FaceDetector(); // Face detector API does not exist in node.js, do not use window. in looping but here is fine to do so  
console.log(video, canvas, faceCanvas, faceDetector);

// 4----------- function that will populate users video

// this wraps users feed from webcam
async function populateVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1290, hwight: 720 },
        });
    video.src = stream;
    await video.play();
// size the canvases to be the same as the video 
    console.log(video.videoWidth, video.videoHeight);
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    faceCanvas.width = video.videoWidth;
    faceCanvas.height = video.videoHeight;
    //to dynamically set it, await for video to start playing 
    }
// when trunning through a bundler no longer able to access functions bia console. hack to enable is  
console.log(populateVideo);
// or store in a global variable 
//returns a promise, first must mark async and await 


//5 ------------------------- work with face detection API

async function detect() {
    // detect faces in shot
    const faces = await faceDetector.detect(video);
    //pass access to video 
    console.log(faces);

    // to run drawFace loop over each face
    faces.forEach(drawFace);
    // it will pass drawFace and run 

    //ask the browser when next animation frame is and tell it to run detect for us 
    requestAnimationFrame(detect);
    // above is recursion - a function runs forever, it calls itself inside itself
    // we can also run detect() manually
    }

// 6 ------------ drwa rectangle areujnd faces and censor 
function drawFace(face) {
    // how wide and high is users face and x and y coordinates from top
    //loop over
    console.log(face);

    // x y the same as left and top right is x + width
    const { width, height, top, left } = face.boundingBox;

    //here can also console log ({ wrapped in {} as it will shiw props with it width: width, height: height... })
    console.log(width, height, top, left);

    //draw a box on the canvas element  and overlay it on top of the video
    ctx.strokeRect(top, left, width, height); // api for drawing the rectangle
    
}

//run it after the video has been populated
populateVideo().then(detect);
// run it infinitely

// promise based 
// runs once and stopped
// run it over and over, not interval , but request anumation frame
// browser will tell us when to check againrather than us telling the browser when to do it


paused at 34 min before pixelating users face