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