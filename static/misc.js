let item = document.getElementById('footerLogo').textContent


// play normal
item.addEventListener('mouseover', () => {
  item.classList.add('_active')
})

// play in reverse
item.addEventListener('mouseout', () => {
  item.style.opacity = 0 // avoid showing the init style while switching the 'active' class

  item.classList.add('in-active')
  item.classList.remove('_active')

  // force dom update
  setTimeout(() => {
    item.classList.add('_active')
    item.style.opacity = ''
  }, 5)

  item.addEventListener('animationend', onanimationend)
})

function onanimationend () {
  item.classList.remove('_active', 'in-active')
  item.removeEventListener('animationend', onanimationend)
}