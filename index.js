var slideContents = [
  {
    type: 'app',
    h1: 'Create incredible apps.',
    h3: 'smooth and quickly update with excellent performance.<br>makeing wonderful responsive user experience.',
    btns: ['Get The Case', 'View More'],
  },
  {
    type: 'function',
    h1: 'plentiful functional web.',
    h3: 'fuctional platform is still essensial in HTML5 model.<br>Do something easy office / homework just browser.',
    btns: ['Check It Now', 'View More'],
  },
  {
    type: 'sap',
    h1: 'popular Single Page',
    h3: 'most popular single page site, with vue / react / angular.<br>once created, run everywhere, that\'s it.',
    btns: ['Check It Now', 'View More'],
  }
]
var i = 0, j = slideContents.length, progress = false;
setInterval(function(){
  setSlideContent(1)
}, 6000)
function setSlideContent(l, k){
  if (progress)
    return 0
  progress = true
  i += l || 0
  if (k)
    i = k
  i == j ? i = 0:0
  
  var slide = document.getElementById('slide'),
      h1 = slide.querySelector('h1'),
      h3 = slide.querySelector('h3'),
      dots = document.querySelector('.page-dots'),
      slideContent = slideContents[i];
  slide.setAttribute('slide-type', slideContent.type)
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
  }, 500)
}