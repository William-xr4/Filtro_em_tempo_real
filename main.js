var canvas;
var video;
var posenet;
var classifier;
var noseX=0;
var noseY=0;

function preload(){}

function setup(){
  canvas=createCanvas(350, 300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(350, 300);
  video.hide();
  posenet=ml5.poseNet(video, modelLoaded);
  posenet.on("pose", gotPoses);
}

function draw(){
  image(video, 0, 0, 350, 300);

  fill("black");
  stroke("black");
  rectMode(CENTER);
  rect(noseX, noseY, 100, 140);
  // filter(THRESHOLD);
}

function takeSnapshot(){
  save("foto.png");
}

function modelLoaded(){
  console.log("Posenet foi carregado!");
}

function gotPoses(results){
  if(results.length>0){
    console.log(results);
    console.log("nariz x="+results[0].pose.nose.x);
    console.log("nariz y="+results[0].pose.nose.y);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
  }
}