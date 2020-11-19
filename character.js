let audio = document.getElementById("audio");
let playBtn = document.getElementById("playBtn");
let count = 0;

function playBtn0() {
    if(count == 0){
        count = 1;
        audio.play();
    }else{
        count = 0;
        audio.pause();

    }
}