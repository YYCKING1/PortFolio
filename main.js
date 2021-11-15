status ="";
input_var = "";
objects = [];
object_name = "";
var synth = window.speachSynthesis;
function preload()
{

}

function setup()
{
    canvas = createCanvas(400, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
image(video, 0, 0, 400,380);
status!="";
if(objects[i].label == object_name)
{
    objectDetector.detect(gotResults);
    video.stop();//stopping the video once the object is found
    objectD.detect(gotResults);
    for( i = 0; i <objects.length; i++)
    {

        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}
}


function gotResults(error,results)
{
    if( error )
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        objects = results;
    }
}

function start()
{
    objectD = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    object_name = document.getElementById("Input").value;   
}

