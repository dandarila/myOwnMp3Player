let buttons = {
     play : document.getElementById('play-btn'), 
     pause: document.getElementById('pause-btn'), 
     mute : document.getElementById('mute-btn'), 
     unmute : document.getElementById('unmute-btn')
}

buttons.play.addEventListener('click', function() {
    buttons.play.style.zIndex = 1;
    buttons.pause.style.zIndex = 2;  
});

buttons.pause.addEventListener('click', function() {
    buttons.play.style.zIndex = 2;
    buttons.pause.style.zIndex = 1;  
});

buttons.mute.addEventListener('click', function() {
    buttons.mute.style.zIndex = 1;
    buttons.unmute.style.zIndex = 2;  
});

buttons.unmute.addEventListener('click', function() {
    buttons.mute.style.zIndex = 2;
    buttons.unmute.style.zIndex = 1;  
});