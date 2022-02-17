function preload(){

}
function setup(){
    canvas = createCanvas(280, 280);
    canvas.mouseReleased(classifyCanvas);
    canvas.center();
    synth = window.speechSynthesis;
}
function clearcanvas(){
    background(226, 226, 226)
}
function classifyCanvas(){
    classifier.classify(canvas,results);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = 'Label: ' + results[0].label;
    document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';
    utterThis = new SpeechSynthesisUtterance(results[0].label);
    synth.speak(utterThis);
}