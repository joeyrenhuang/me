// 头部页面切换
import slideContents from './mock'

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