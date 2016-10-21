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
}, 8000)
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


let preScrollY = 0
let manual = false
let scrollMyExperience = (evt)=>{
  

  let dY = window.scrollY - preScrollY

  preScrollY = window.scrollY

  let e = document.querySelector('#SKILL>.my-experience')
  let windowHeight = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;

  if  ( dY >= 10 
    && ( (windowHeight + window.scrollY) > (e.offsetTop + e.clientHeight * 1) || ( (windowHeight + window.scrollY) >= (document.body.clientHeight - 100) ) ) ) {

      if(manual){
        return 0;
      }

      let flag = slideFn(1)

      //show hobby
      !flag && showHobby()
      
  }

  if ( (windowHeight + window.scrollY) < (e.offsetTop + e.clientHeight * .5) ) {
    document.querySelectorAll('#SKILL .my-experience.slide-left').forEach((e, i)=>{
      e.className = e.className.replace('slide-left', '');
    })
    // hide hobby
    hideHobby()
    manual = false
  }

  if ( (windowHeight + window.scrollY) >= (document.body.clientHeight) ) {
    showHobby()
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
  setTimeout(()=> touchDelay = 0, 500)
  return true
}

let hobby = document.getElementById('HOBBY')
let showHobby = ()=>{
  hobby.style.maxHeight = '10rem';
}
let hideHobby = ()=>{
  hobby.style.maxHeight = 0;
}



// hobby slide


document.querySelector('#PLAYNOW .fa').addEventListener('click', function(){
  this.className = 'fa fa-pause'

  let slide = document.querySelector('#HOBBY .slide-container')
  let tpt = document.querySelector('#HOBBY>.slide')
  let s = [tpt]
  s.forEach((e, i)=>{
    // e.style.transform = 'translateX(' + slide.childNodes.length * -100/2 + '%)';
    
    e.style.transform = 'translateX(' + slide.childNodes.length * -100/2 + '%)';
    e.style.transition =  'all 5' + 's linear';
  })
  slide.style.left =   '-150%'
  slide.style.transition =  'all 10' + 's linear';

})