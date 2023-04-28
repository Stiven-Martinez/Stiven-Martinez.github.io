const sections = document.getElementsByTagName('section')
let images = document.getElementsByTagName('img')
let subtitles = document.getElementsByTagName('h2')

document.addEventListener('scroll', () => {
	for (i = 0; i < sections.length; i++) {
		if (isInMiddleViewport(sections[i])) show(i)
	}
})

function isInMiddleViewport(element) {
	const rect = element.getBoundingClientRect()
	return (
		rect.top <= document.documentElement.clientHeight / 2 &&
		rect.bottom >= document.documentElement.clientHeight / 2
	)
}

function show(i) {
	images[i].classList.remove('img--hidden')
	subtitles[i].classList.remove('subtitle--hidden')
	images[i].classList.add('img--visible')
	subtitles[i].classList.add('subtitle--visible')
}

function hide(i) {
	images[i].classList.add('img--hidden')
	subtitles[i].classList.add('subtitle--hidden')
	images[i].classList.remove('img--visible')
	subtitles[i].classList.remove('subtitle--visible')
}
