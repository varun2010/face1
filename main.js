Webcam.set({
    width:360,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("cam");
Webcam.attach(camera);
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version: ',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rBQ4Terta/model.json', modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}
