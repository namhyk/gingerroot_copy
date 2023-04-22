const mobileNavLabel = document.getElementById('mobile-nav-label')

mobileNavLabel.addEventListener('click', 
function() {
  console.log('clicked')
  mobileNavLabel.classList.toggle('active')
})