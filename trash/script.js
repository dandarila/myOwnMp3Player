let domVariables = {
  play: document.getElementById('play-btn'), 
  pause: document.getElementById('pause-btn'), 
  mute: document.getElementById('mute'),
  audio: document.getElementById('audio'), 
  title: document.getElementById('songTitle'),
  duration: document.getElementById('songDuration'), 
  image: document.getElementById('image')

};

function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    audio.volume = 0;
  } else {
    audio.volume = 1;
  }
}
// domVariables.mute.addEventListener('click', function() {
//     console.log('muted')
//   
// })
// domVariables.mute.addEventListener('click', function() {
//   console.log('muted')
// audio.volume = 1;
// })

// change with z-index when you have time 
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
let images = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg', 'images/img5.png', 'images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg', 'images/img5.png'];
let currentPosition = 0;
let currPositionImag = 0;


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
  audio.play();
 }

// cover images : 
setInterval(function() {
  currPositionImag = currPositionImag + 1;
  domVariables.image.setAttribute('src', `${images[currPositionImag]}`);
  }, 13000);
