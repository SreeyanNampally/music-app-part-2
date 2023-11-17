music1 = "";
music2 = "";

function setup(){
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video, 0, 0, 500, 500)
}

function preload(){
    music1 = loadSound("ringtone.mp3")
    music2 = loadSound("ring2.mp3")
}
