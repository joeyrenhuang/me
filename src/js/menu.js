//MENU
document.querySelector('header nav a.collapse').addEventListener('click', function(){
  if (this.parentNode.className.indexOf('open') != -1){
    this.parentNode.className = this.parentNode.className.replace('open', '')
    this.className = 'collapse'
  } else {
    this.parentNode.className = 'open'
    this.className += ' open'
  }
})

document.querySelector('.fa.fa-signal').addEventListener('click', function(){
  if (this.className.indexOf('active') != -1){
    pauseSong()
    this.className = 'fa fa-signal'
  }else{
    startSong()
    this.className += ' active'
  }
})
import libai from '../media/libai.mp3'
let song = new Audio(libai)
// song.loop = true
let pauseSong = ()=>{
  song.pause()
}
let startSong = ()=>{
  if(song.ended){
    song.currentTime = 0
  }
  song.play()
}
