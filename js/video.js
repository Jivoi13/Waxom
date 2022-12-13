let video = document.getElementById('video');
let progress = document.getElementById('prog_line');
let play = document.getElementById('playpause');
let play2 = document.getElementById('playpause_poster')

play.onclick = videoplay;
play2.onclick = videoplay;
video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind;

function videoplay() {
    if (video.paused) {
        video.play();
        document.getElementById('video_poster').style.display = "none";
    }
    else {
        video.pause();
        document.getElementById('video_poster').style.display = "flex";
    }
}


function progressUpdate() {
    let c = video.currentTime;
    let d = video.duration;
    progress.value = 100 * c / d;
}

function videoRewind() {
    let w = this.offsetWidth;
    let o = event.offsetX;
    this.value = 100 * o / w;
    video.currentTime = video.duration * (o / w);
}
