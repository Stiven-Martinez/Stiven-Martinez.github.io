const menuButton = document.getElementById('header__menu')

menuButton.addEventListener('click', (e) => {
	let element = e.target
	if (element.id == 'menu-burger') {
		element.classList.toggle('fi-br-menu-burger')
		element.classList.toggle('fi-br-x')
		document.getElementById('menu__list').classList.toggle('active')
	}
})
