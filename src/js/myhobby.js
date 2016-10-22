




// hobby slide

// set 100 movies default
let movies = document.querySelector('#HOBBY .slide-movie')
let playnow = document.querySelector('#PLAYNOW .fa')
let movieTime = movies.childNodes.length*10*1000
let slideX = (movies.childNodes.length-1) * movieTime 
let speed = slideX/movieTime
let startTime = 0
let pauseTime = 0
let pause = true
let finished = 0
playnow.addEventListener('click', function(){
  if (this.className.indexOf('disabled') != -1){
    return 0;
  }
  if(pause){
    pause = false
    this.className = 'fa fa-pause'

    let nowTime = new Date().getTime()
    if (!startTime)
      startTime = new Date().getTime()
    else
      startTime += nowTime - pauseTime

    let dt = (nowTime - startTime)
    movies.style.transform = 'translateX(-' + slideX/movieTime + '%)';
    movies.style.transition =  'all '+ (movieTime-dt)/1000 +'s linear';
    finished = setTimeout(()=>{
      playnow.className = 'fa fa-pause disabled'
    }, (movieTime-dt/1000))
  } else {
    pause = true
    this.className = 'fa fa-play'
    if (finished != 0){
      clearTimeout(finished)
      finished = 0
    }
    
    pauseTime = new Date().getTime()
    let dt = (pauseTime - startTime)
    let slideXX = speed*dt

    if (slideXX >= slideX){
      slideXX = slideX

    }
    movies.style.transform = 'translateX(-' + slideXX/movieTime + '%)';
    movies.style.transition = 'all 0s linear';
  }

})
let restartMovie = ()=>{
  playnow.className = 'fa fa-play'
  startTime = 0
  pauseTime = 0
  pause = true
  movies.style.transform = 'translateX(0)';
  movies.style.transition = 'all 0s linear';
}



// display and hide 
let hobby = document.getElementById('HOBBY')
let showHobby = ()=>{
  hobby.style.maxHeight = '10rem';
}
let hideHobby = ()=>{
  hobby.style.maxHeight = 0;
}
let scrollHobby = ({bottom, top})=>{
  if(bottom){
    showHobby()
  }
  if(top){
    restartMovie()
    hideHobby()
  }
}

let PLAYNOW = document.querySelector('#PLAYNOW')
let fingerHover = ()=>{
  if(evt.target.id == "PLAYNOW" || evt.target.parentNode.id == "PLAYNOW") {
    PLAYNOW.className = 'finger-hover'
  }else{
    PLAYNOW.className = ''
  }
}



export { scrollHobby, fingerHover }