// import { showHobby, hideHobby } from './myhobby'
// slide left

let manual = false
export default ({bottom, top, DY})=>{
    if (bottom & DY > 0){
      if(manual){
        return 0;
      }
      slideFn(1)
    }

    if (top) {
      document.querySelectorAll('#SKILL .my-experience.slide-left').forEach((e, i)=>{
        e.className = e.className.replace('slide-left', '');
      })
      manual = false
    }
}

// touch slide left
let el = document.querySelector('#SKILL>.my-experience');
el.addEventListener('touchstart', (evt)=>{
  touchHandlerStart(evt)
}, false);
el.addEventListener('touchmove', (evt)=>{
  touchHandlerMove(evt)
}, false);
let startX = 0
let startY = 0
let touchDelay = 0
let log = document.getElementById('log')
let touchHandlerStart = (evt)=>{
  startX = evt.pageX
  startY = evt.pageY
}

let touchHandlerMove = (evt)=>{
  
  // log.innerHTML += '---dv---:' + (evt.pageX - startX )

  
  if ((evt.pageX - startX) > 100) {
    slideFn(-1)
    manual = true


  }
  if ((evt.pageX - startX) < -100) {
    slideFn(1)
    manual = true

  }


}

let slideFn = (n)=>{

  if (touchDelay) {
    return true
  }
  let animateEles = []
  let animateEle = null
  if (n == -1){
    animateEles = document.querySelectorAll('#SKILL .my-experience.slide-left')
    animateEle = animateEles[animateEles.length - 1]
     if (!animateEle)
      return false
    animateEle.className = animateEle.className.replace('slide-left', '')

  } else {
    animateEles = document.querySelectorAll('#SKILL .my-experience:not(.slide-left)')
    if (!animateEles[1])
      return false
    animateEle = animateEles[0]
    animateEle.className += " slide-left"
  }
  touchDelay = 1
  setTimeout(()=> touchDelay = 0, 3000)
  return true
}