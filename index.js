const mobileNavLabel = document.getElementById('mobile-nav-label')

mobileNavLabel.addEventListener('click', 
function() {
  console.log('clicked')
  mobileNavLabel.classList.toggle('active')
  if (mobileNavLabel.classList.contains('active')){
    document.getElementById('nav-el').style.display = 'block'
    mobileNavLabel.innerText = 'close'
  } else {
    document.getElementById('nav-el').style.display = 'none'
    mobileNavLabel.innerText = 'menu'
  }
})

