//Variables 
let buttons = {
    play : document.getElementById('play-btn'), 
    pause: document.getElementById('pause-btn'), 
    mute : document.getElementById('mute-btn'), 
    unmute : document.getElementById('unmute-btn'), 
    addToFav: document.getElementById('favorite-empty-heart'), 
    removeFromFav: document.getElementById('favorite-full-heart')
};


let domVariables = {
    image : document.getElementById('image'), 
    audio : document.getElementById('audio'),
    songTitle : document.getElementById('songTitle'), 
    savedSongs : document.getElementById('savedSongs')
};

let playlist = ['media/alligator3.mp3', 'media/applause.mp3', 'media/arc1.mp3', 'media/baboon_monkey.mp3', 'media/coyote1.mp3', 'media/falling.mp3', 'media/lioncub2.mp3', 'media/powerlines.mp3', 'media/sample.mp3', 'media/suicide.mp3', 'media/wolf8.mp3', 'media/woscream4.mp3', 'media/LeftwithaGun.mp3', 'media/Lilly.mp3'];
let images = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg', 'images/img5.png', 'images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg', 'images/img5.png'];
let currentPosition = 0;
let currPositionImag = 0;



//Play Music
buttons.play.addEventListener('click', function() {
    buttons.play.style.zIndex = 1;
    buttons.pause.style.zIndex = 2;
    playMusic();
});

let playMusic = function playmusic() { 
    domVariables.audio.setAttribute('src', `${playlist[currentPosition]}`);
    let songTitle = `${playlist[currentPosition]}`
    domVariables.songTitle.innerHTML = songTitle.slice(6, -4);
    domVariables.audio.play();
};

//Next song 
domVariables.audio.onended = function() {
    console.log("The audio has ended");
    buttons.addToFav.style.zIndex = 2;
    buttons.removeFromFav.style.zIndex = 1;
    currentPosition = currentPosition + 1
    domVariables.audio.setAttribute('src', `${playlist[currentPosition]}`);
    songTitle.innerHTML = (`${playlist[currentPosition]}`).slice (6, -4);
    domVariables.audio.play();
};

//Pause music 
////////////////////////////////////////////////////
//  to do : resume, not start over !! 
/////////////////////////////////////////////

buttons.pause.addEventListener('click', function(){
    buttons.play.style.zIndex = 2;
    buttons.pause.style.zIndex = 1;
    pauseMusic();
});

let pauseMusic = function() {
    domVariables.audio.pause();
};



//Mute /unmute 
buttons.mute.addEventListener('click', function() {
    buttons.mute.style.zIndex = 1;
    buttons.unmute.style.zIndex = 2; 
    domVariables.audio.volume = 0;
});

buttons.unmute.addEventListener('click', function() {
    buttons.mute.style.zIndex = 2;
    buttons.unmute.style.zIndex = 1; 
    domVariables.audio.volume = 1; 
});


// add/remove to Fav 
buttons.addToFav.addEventListener('click', function() {
  buttons.addToFav.style.zIndex = 1;
  buttons.removeFromFav.style.zIndex = 2; 
  addToMyList();
});

buttons.removeFromFav.addEventListener('click', function() {
  buttons.addToFav.style.zIndex = 2;
  buttons.removeFromFav.style.zIndex = 1; 
});

let likes = [];
let existentLikes = localStorage.getItem('Favorite Songs').split(",")
for (let i = 0; i < existentLikes.length; i++) {
  likes.push(existentLikes[i]);
};


function addToMyList() {
  let songToBeAdded = (`${playlist[currentPosition]}`).slice (6, -4);
  let ul = domVariables.savedSongs;
  let li = document.createElement("li");
    let img = document.createElement('img');
    img.src= "images/buttons/delete.jpg";
    li.appendChild(document.createTextNode(`${songToBeAdded}`));
    ul.appendChild(li);
    li.appendChild(img);
    img.addEventListener("click", function() {
      console.log('click')
    })
    //add to local storage 
  likes.push(songToBeAdded);
  localStorage.setItem('Favorite Songs', likes);
};



// cover images : 
setInterval(function() {
    currPositionImag += 1;
    domVariables.image.setAttribute('src', `${images[currPositionImag]}`);
}, 7000);





document.addEventListener("DOMContentLoaded", retrieveWebStorage());


function retrieveWebStorage() {
    for (let i = 0; i < existentLikes.length; i++ ) {
        let ul = domVariables.savedSongs;
        let li = document.createElement("li");
        li.className = "hoverable";
        li.appendChild(document.createTextNode(`${existentLikes[i]}`));
        ul.appendChild(li);
    }
};



