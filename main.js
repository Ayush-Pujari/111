prediction_1="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);

function takeSnapShot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="img1" src="'+data_uri+'">';
    
    });

}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/H3GOqf4cl/model.json",modelLoded);
function modelLoded(){
    console.log("modelLoded");
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first prediction is "+prediction_1;
    utterthis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterthis);
}































