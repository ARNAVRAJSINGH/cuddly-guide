img="";
status="";
array1=[];
function preload(){
img=loadImage('dog_cat.jpg');
}
function setup(){
canvas= createCanvas(640,460);
canvas.center();
objectDetection= ml5.objectDetector('cocossd',modelLoaded);
document.getElementById('status').innerHTML="Objects are being detected";
}
  
function draw(){
image(img,0,0,640,460);
if(status!=""){
 for(i=0; i<array1.length; i++)
 
 {
  document.getElementById("status").innerHTML="status: object Detected" ;
  fill('#EE4B2B');
  hi=floor(array1[i].confidence*100);
  text(array1[i].label+ " "+ hi + '%',array1[i].x-35, array1[i].y+35);
noFill();
stroke('#EE4B2B');

rect(array1[i].x,array1[i].y,array1[i].width,array1[i].height);
}

}


}

function modelLoaded(){
  console.log('Model is loaded');
  status=true;
  objectDetection.detect(img,gotResult);
}
function gotResult(error,results){
  if(error){
    console.log(error);
      
  }
  console.log(results);
  array1=results;
}