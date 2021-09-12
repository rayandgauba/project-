var nose_x = 0;
var nose_y = 0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/7YfBXmXS/M.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.position(530,200);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x-25;
        nose_y = results[0].pose.nose.y+1;

        console.log("Nose_x = " + nose_x);
        console.log("Nose_y = " + nose_y);
    }
}

function modelLoaded(){
    console.log("PoseNet is initialized!!");
}

function draw(){
    image(video,0,0,300,300);
    image(clown_nose,nose_x,nose_y,50,50);
}

function takeSnapshot(){
    save('My_filter_Image.png');
}