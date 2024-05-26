const buttonPlayCard1 = document.querySelector('.button-play-card1');
const buttonPlayCard2 = document.querySelector('.button-play-card2');
const buttonPlayCard3 = document.querySelector('.button-play-card3');
const buttonPlayCard4 = document.querySelector('.button-play-card4');
const buttonPlayCard5 = document.querySelector('.button-play-card5');
const buttonPlayCard6 = document.querySelector('.button-play-card6');
const buttonPlayCard7 = document.querySelector('.button-play-card7');
const buttonPlayCard8 = document.querySelector('.button-play-card8');
const mySound = document.querySelector('.mySound');
const buttonPlay = document.querySelector('.player__play')
// console.log(buttonPlay)
const inputRange = document.querySelector('.player__timeline')
// console.log(inputRange)
let timerTimeLine
const value = document.querySelector('.value')
const valueAudioInput = document.querySelector('.value__audio')
const buttonValue = document.querySelector('.player__button-value')
// console.log(valueAudioInput)
// console.log(value)
const arreyMusic = [
  './audio/1.mp3,',
  './audio/2.mp3',
  './audio/3.mp3,',
  './audio/4.mp3,',
  './audio/5.mp3,',
  './audio/6.mp3',
  './audio/7.mp3',
  './audio/8.mp3',
  './audio/9.mp3'
]

const playerDown = document.querySelector('.player__down')

let i = 0
playerDown.addEventListener('click',()=>{
  if(i >= arreyMusic.length){
    i = 0;
  }
  mySound.src = arreyMusic[i]
  mySound.play();
  i = i + 1;
  console.log(arreyMusic[i])
})

function funcTimer(){
  timerTimeLine = setInterval(function(){
   let inputLevel = mySound.currentTime / mySound.duration * 100;
    inputRange.value = inputLevel;
    if(inputLevel>100){
      clearInterval(timerTimeLine)
    }
  }, 1000

  )
}

function playSound( adres){
  if (mySound.paused){
    mySound.src = adres
    mySound.play();
    funcTimer()
  } else {
    mySound.pause();
    clearInterval(timerTimeLine)
  }
}


buttonPlayCard1.addEventListener('click', ()=>{
 playSound('./audio/7.mp3')
})


buttonPlayCard2.addEventListener('click', ()=>{
  playSound('./audio/7.mp3')
 })


 buttonPlayCard3.addEventListener('click', ()=>{
  playSound('./audio/9.mp3')
 })


 buttonPlayCard4.addEventListener('click', ()=>{
  playSound('./audio/1.mp3')
 })

 buttonPlayCard5.addEventListener('click', ()=>{
  playSound('./audio/3.mp3')
 })

 buttonPlayCard6.addEventListener('click', ()=>{
  playSound('./audio/6.mp3')
 })

buttonPlayCard7.addEventListener('click', ()=>{
  playSound('./audio/5.mp3')
 })

buttonPlayCard8.addEventListener('click', ()=>{
  playSound('./audio/4.mp3')
 })

buttonPlay.addEventListener('click',()=> {
 playSound('./audio/9.mp3')
})

buttonValue.addEventListener('mouseenter', ()=>{
  console.log("buttonValue");
  value.classList.add('value__open')
})


value.addEventListener('mouseleave', ()=>{
  value.classList.remove('value__open')
} )

valueAudioInput.addEventListener('input' , ()=> {
 mySound.volume = event.target.value;
 console.log( event.target.value)
} )
