(function (window) {

var byeSpeaker = {};

var speakWord = "Good Bye";

byeSpeaker.speakWord = function () {
  console.log(speakWord + " " + name);
}

window.byeSpeaker = byeSpeaker;

})(window);