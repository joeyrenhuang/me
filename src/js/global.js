import scrollExperience from './myexperience'
import {scrollHobby, fingerHover} from './myhobby'

// update window heights and body height
let WH = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
let BH = document.body.clientHeight
window.addEventListener('resize', ()=>{
  WH = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight
  BH = document.body.clientHeight
})
// update window heights and body height


// touch event === hover event 
// require domNode
// export {top?bottom?DY} of domNode
document.addEventListener('touchstart', (evt)=>{
  fingerHover()
  
})
// touch event === hover event



// scroll event
let myexperience =  document.querySelector('#SKILL>.my-experience')
let myhobby =  document.querySelector('#HOBBY>.slide-movie')

window.addEventListener('scroll', (evt)=>{
  scrollExperience( scroll(evt, myexperience) )
  scrollHobby( scroll(evt, myhobby) )
})
// scroll event
let Y = 0
let scroll = (evt, e)=>{
  let DY = window.scrollY - Y
  let offsetTop = getOffsetTop(e)
  Y = window.scrollY
  let bottom = (WH + Y) > (offsetTop + e.clientHeight) || (WH + Y) >= BH
  let top = (WH + Y) < offsetTop
  return {
    bottom,
    top,
    DY
  }
}

let getOffsetTop = (e)=>{
  let top = e.offsetTop
  while(e = e.offsetParent){
    top += e.offsetTop
  }
  return top
}
  
// scroll event
