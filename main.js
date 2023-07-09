prediction_1 = "";
prediction_2 = "";

Webcam.set({
  width: 350,
  height: 300,
  image_format: 'png',
  png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function capturedimage() {
  Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>'
  });
}

function modelLoaded() {
  console.log('Model Loaded!');
  console.log('ml5.version:', ml5.version);
  classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/z-YMcIlXk/model.json", modelLoaded);
}


function speak() {
 synth = window.speechSynthesis;
 speak_data_1 = "The first prediction is: " + prediction_1;
 speak_data_2 = "The second prediction is: " + prediction_2;
 utterThis = new SpeechSynthesisUtterance(speak_data_1 + " " + speak_data_2);
  synth.speak(utterThis);
}


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    document.getElementById("result_emotion_name2").innerHTML = results[1].label;

    prediction_1 = results[0].label;
    prediction_2 = results[1].label;

    if (results[0].label == "Thumbs Up") {
      document.getElementById("update_emoji").innerHTML = "&#128077;";
    } else if (results[0].label == "Peace") {
      document.getElementById("update_emoji").innerHTML = "&#9996;";
    } else if (results[0].label == "Excellent") {
      document.getElementById("update_emoji").innerHTML = "&#9994;";
    }

    if (results[1].label == "Thumbs Up") {
      document.getElementById("update_emoji").innerHTML = "&#128077;";
    } else if (results[0].label == "Peace") {
      document.getElementById("update_emoji").innerHTML = "&#9996;";
    } else if (results[0].label == "Excellent") {
      document.getElementById("update_emoji").innerHTML = "&#9994;"; 
    }

    speak();
  }
}

function prediction2()
{
  img = document.getElementById("prediction2");
}

