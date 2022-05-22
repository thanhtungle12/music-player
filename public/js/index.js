var audio = document.querySelector('audio')
var btn = document.querySelectorAll('.btn i')
var h1 = document.querySelector('.mp3-player h1')
var times= document.querySelectorAll('.time p')
var range = document.querySelector('.duration input')
var volume = document.querySelector('.slide-volume input')

const sliderTimer = {
    start: {minute:1, second:1},
    end: {minute:1, second:1},
}
window.onload = function(){
    audio.pause();
    range.min = 0;
    range.max = audio.duration;
    range.value = 0;
}
btn[2].onclick = function() {
    if(audio.paused) {
        audio.play();
        btn[2].setAttribute('class','fa-solid fa-pause')
    } else {
        audio.pause()
        btn[2].setAttribute('class','fa-solid fa-play')
    }
}
audio.ontimeupdate = function() {
    let time = audio.duration-audio.currentTime;
    sliderTimer.start.minute =(Math.floor((audio.currentTime)/60));
    sliderTimer.start.second = (Math.round((audio.currentTime)-Math.floor((audio.currentTime)/60)*60)) 
    range.value = audio.currentTime;
    times[0].innerText= toTimerString(sliderTimer.start)

    sliderTimer.end.minute =(Math.floor((time)/60));
    sliderTimer.end.second = (Math.round((time)-Math.floor((time)/60)*60))
    times[1].innerText= toTimerString(sliderTimer.end)

}
range.onchange =function() {
    audio.currentTime = range.value;
}
function toTimerString({minute,second}){
    const minuteStr = minute.toString().padStart('2','0')
    const secondStr = second.toString().padStart('2','0')
   return  `${minuteStr}:${secondStr}`
}
volume.onchange = function() {
    audio.volume = (volume.value)/100;
}
btn[4].onclick = function() {
    if(btn[4].classList.value==="fa-solid fa-repeat"){
        btn[4].setAttribute('class',"fa-solid fa-car")
        audio.loop =true;
    } else {
        btn[4].setAttribute('class','fa-solid fa-repeat')
        audio.loop=false;
    }
    
}



