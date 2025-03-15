let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctln = document.getElementById("ctln"); 

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPause() {
    
    if (ctln.classList.contains("fa-pause")) {
        song.pause();
        ctln.classList.remove("fa-pause");
        ctln.classList.add("fa-play");
    } else {
        song.play();
        ctln.classList.add("fa-pause");
        ctln.classList.remove("fa-play");
    }
}
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}
progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    ctln.classList.add("fa-pause");
    ctln.classList.remove("fa-play");
}
