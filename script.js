let domVariables = {
  play: document.getElementById('play-btn'), 
  pause: document.getElementById('pause-btn'), 
  audio: document.getElementById('audio'), 
  title: document.getElementById('songTitle'),
  duration: document.getElementById('songDuration')
};


// change with z-index
 domVariables.pause.style.display = "none"
 domVariables.audio.style.display = "none"

domVariables.play.addEventListener('click', function(){
  domVariables.play.style.display="none";
  domVariables.pause.style.display ="block";
  playMusic();
});

domVariables.pause.addEventListener('click', function(){
  domVariables.play.style.display="block";
  domVariables.pause.style.display ="none";
  pauseMusic();
 });

// try to make an input that add values to this array - mongoDB ?
let playlist = ['media/alligator3.mp3', 'media/applause.mp3', 'media/arc1.mp3', 'media/baboon_monkey.mp3', 'media/coyote1.mp3', 'media/falling.mp3', 'media/lioncub2.mp3', 'media/powerlines.mp3', 'media/sample.mp3', 'media/suicide.mp3', 'media/wolf8.mp3', 'media/woscream4.mp3', 'media/LeftwithaGun.mp3', 'media/Lilly.mp3'];
let currentPosition = 0;


let playMusic = function playmusic() { 
  domVariables.audio.setAttribute('src', `${playlist[currentPosition]}`);
  let songTitle = `${playlist[currentPosition]}`
  domVariables.title.innerHTML = songTitle.slice(6, -4);
  audio.play();
 
};


let pauseMusic = function() {
  audio.pause();
}

//play next song on end 
audio.onended = function() {
  console.log("The audio has ended");
  currentPosition = currentPosition + 1
  domVariables.audio.setAttribute('src', `${playlist[currentPosition]}`);
  domVariables.title.innerHTML = (`${playlist[currentPosition]}`).slice (6, -4);
  audio.play()
 }




//   // calculate total length of value
//   var totalLength = calculateTotalValue(length)
//   document.getElementById("end-time").innerHTML = totalLength;

//   // calculate current value time
//   var currentTime = calculateCurrentValue(current_time);
//   document.getElementById("start-time").innerHTML = currentTime;

//   var progressbar = document.getElementById('seek-obj');
//   progressbar.value = (player.currentTime / player.duration);
//   progressbar.addEventListener("click", seek);

//   if (player.currentTime == player.duration) {
//     document.getElementById('play-btn').className = "";
//   }


// function initPlayers(num) {
//   // pass num in if there are multiple audio players e.g 'player' + i

//   for (var i = 0; i < num; i++) {
//     (function() {

//       // Variables
//       // ----------------------------------------------------------
//       // audio embed object
//       var playerContainer = document.getElementById('player-container'),
//         player = document.getElementById('player'),
//         isPlaying = false,
//         playBtn = document.getElementById('play-btn');

//       // Controls Listeners
//       // ----------------------------------------------------------
//       if (playBtn != null) {
//         playBtn.addEventListener('click', function() {
//           togglePlay()
//         });
//       }

//       // Controls & Sounds Methods
//       // ----------------------------------------------------------
//       function togglePlay() {
//         if (player.paused === false) {
//           player.pause();
//           isPlaying = false;
//           document.getElementById('play-btn').className = "";

//         } else {
//           player.play();
//           document.getElementById('play-btn').className = "pause";
//           isPlaying = true;
//         }
//       }
//     }());
//   }
// }

// function calculateTotalValue(length) {
//   var minutes = Math.floor(length / 60),
//     seconds_int = length - minutes * 60,
//     seconds_str = seconds_int.toString(),
//     seconds = seconds_str.substr(0, 2),
//     time = minutes + ':' + seconds

//   return time;
// }

// function calculateCurrentValue(currentTime) {
//   var current_hour = parseInt(currentTime / 3600) % 24,
//     current_minute = parseInt(currentTime / 60) % 60,
//     current_seconds_long = currentTime % 60,
//     current_seconds = current_seconds_long.toFixed(),
//     current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

//   return current_time;
// }

// initPlayers(jQuery('#player-container').length);