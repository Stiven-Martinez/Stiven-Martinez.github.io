let menuIcon = document.getElementById('menu-icon')
let menu = document.getElementById('menu')

menuIcon.addEventListener(
	'click',
	() => {
		menuIcon.classList.toggle('change')
		menu.classList.toggle('hide')
		menu.classList.toggle('show')
	},
	false
)

if (window.screen.width < 900) {
	menu.classList.add('menu-mobile')
	menu.classList.add('hide')
} else {
	if (menuIcon.parentNode) {
		menuIcon.parentNode.removeChild(menuIcon)
	}
}
