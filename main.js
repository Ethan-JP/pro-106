Webcam.set({
    height : 350,
    width : 350,
image_format : "png",
png_quality : 90
});
Webcam.attach("#camera");

function capture() {
    Webcam.snap(
        function (img) {
        document.getElementById("snapshot").innerHTML=`<img src=${img} id="cap_img">`    
        }
    )
}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/x7DwTJe6v/model.json",modelLoaded)
function modelLoaded() {
    console.log("Ethan Your Model Has Successfully Loaded!")
}

function speak(){
    var speechapi=window.speechSynthesis
    speakData1="The first prediction is "+ prediction1
    speakData2="The second prediction is "+ prediction2
    saythis=new SpeechSynthesisUtterance(speakData1+speakData2)
    speechapi.speak(saythis)
}