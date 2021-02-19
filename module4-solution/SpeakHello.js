
(function (window) {

var helloSpeaker = {};


var speakWord = "Hello";

helloSpeaker.speakWord = function () {
  console.log(speakWord + " " + name);
}

window.helloSpeaker = helloSpeaker;

})(window);

