import 'font-awesome/css/font-awesome.css'
import './less/main.less';

let slideContents = [
  {
    type: 'app',
    img: 'phone',
    h1: 'Create incredible apps.',
    h3: 'smooth and quickly update with excellent performance.<br>makeing wonderful responsive user experience.',
    btns: ['Get The Case', 'View More'],
  },
  {
    type: 'function',
    img: 'windows',
    h1: 'Plentiful functional web.',
    h3: 'fuctional platform is still essensial in HTML5 model.<br>Do something easy office / homework just browser.',
    btns: ['Check It Now', 'View More'],
  },
  {
    type: 'sap',
    img: 'ipad',
    h1: 'Popular Single Page',
    h3: 'most popular single page site, with vue / react / angular.<br>once created, run everywhere, that\'s it.',
    btns: ['Check It Now', 'View More'],
  }
]
// 头部页面切换
let i = 0, j = slideContents.length, progress = false;
setInterval(function(){
  if (progress)
    return 0
  setSlideContent(1)
}, 5000)
window.setSlideContent = function(l, k){
  
  progress = true

  i += l || 0
  if (k)
    i = k
  i == j ? i = 0:0
  
  let slide = document.querySelector('#SAYING .slide'),
      imgPart = slide.querySelector('.img-part'),
      h1 = slide.querySelector('h1'),
      h3 = slide.querySelector('h3'),
      dots = document.querySelector('.page-dots'),
      slideContent = slideContents[i];

  imgPart.className = 'img-part ' + slideContent.img
  h1.innerHTML = slideContent.h1
  h3.innerHTML = slideContent.h3

  slide.querySelector('.btn-row a').innerHTML = slideContent.btns[0] || ''
  slide.querySelector('.btn-row a:last-child').innerHTML = slideContent.btns[1] || ''

  if (!slideContent.btns || !slideContent.btns[0])
    slide.querySelector('.btn-row a').innerHTML = slideContent.btns[0] || ''
  if (!slideContent.btns || !slideContent.btns[1])
    slide.querySelector('.btn-row a:last-child').innerHTML = slideContent.btns[1] || ''

  dots.querySelector('li.active').className = ''
  dots.querySelectorAll('li')[i].className = 'active'

  setTimeout(function(){
    progress = false
  }, 1000)
}

document.querySelector('.fa.previous').addEventListener('click', function(){
  setSlideContent(-1)
})
document.querySelector('.fa.next').addEventListener('click', function(){
  setSlideContent(1)
})

document.querySelector('.fa.next').addEventListener('click', function(){
  setSlideContent(1)
})

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


// slide left
window.addEventListener('scroll', (evt)=>{
  scrollMyExperience(evt)
})


let delay = 0
let preScrollY = 0

let scrollMyExperience = (evt)=>{

  let dY = window.scrollY - preScrollY

  preScrollY = window.scrollY

  let e = document.querySelector('#SKILL>.my-experience')
  let windowHeight = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

  if  ( dY >= 0 
    && ( (windowHeight + window.scrollY) > (e.offsetTop + e.clientHeight * 2) || ( (windowHeight + window.scrollY) >= (document.body.clientHeight - 50) ) ) ) {

      let animateEles = document.querySelectorAll('#SKILL .my-experience:not(.slide-left)')
      if (!animateEles[1])
        return false
      let animateEle = animateEles[0]

      if (delay) {
         evt.preventDefault()
         evt.stopPropagation()
         return false
      }
      evt.preventDefault()
      evt.stopPropagation()

      delay = 1000
      setTimeout(()=> delay = 0, delay)
      animateEle.className += " slide-left"
  }

  if ( (windowHeight + window.scrollY) < (e.offsetTop + e.clientHeight) ) {
    document.querySelectorAll('#SKILL .my-experience.slide-left').forEach((e, i)=>{
      e.className = e.className.replace('slide-left', '');
    })
  }
      
}

// touch slide left
let el = document.querySelector('#SKILL>.my-experience');
document.addEventListener('touchstart', touchHandlerStart, false);
document.addEventListener('touchmove', touchHandlerMove, false);
let startX = 0
let startY = 0
let touchDelay = 0
let log = document.getElementById('log')
let touchHandlerStart = (evt)=>{
  alert(1)
  startX = evt.pageX
  startY = evt.pageY
  log.innerHTML += 'startX: ' + startX + ' startY: ' + startY;
}

let touchHandlerMove = (evt)=>{
  if (touchDelay) {
    return false
  }
  if ((evt.pageX - startX) > 20) {
    slide(1)
    log.innerHTML += '->right '

  }
  if ((evt.pageX - startX) < -20) {
    slide(-1)
    log.innerHTML += '<-left   '

  }
  touchDelay = 1
  setTimeout(()=> touchDelay = 0, 500)
}

let slideFn = (n)=>{
  let animateEles = document.querySelectorAll('#SKILL .my-experience:not(.slide-left)')
  if (!animateEles[1])
    return false
  let animateEle = animateEles[0]
  if (n == -1){
    animateEle = animateEles[animateEles.length - 1]
    animateEle.className = animateEle.className.replace('slide-left', '')

  } else {
    animateEle.className += " slide-left"
  }
}




