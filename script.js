// DOM

// Variables

// Initialization
const hasVisitedBefore = localStorage.getItem('hasVisitedBefore') || false

// Events
document.addEventListener('DOMContentLoaded', () => {
	if (!hasVisitedBefore) {
		localStorage.setItem('hasVisitedBefore', true)
		promptInputs()
	}
})

// Functions
const promptInputs = () => {
	const fName = prompt('What is your first name?')
	const lName = prompt('What is your last name?')
	const country = prompt('Where are you from?')
	const pNumber = prompt('What is your phone number?')
	const city = prompt('What city do you live in?')
	const state = prompt('What state do you live in?')

	if (fName && lName && country && pNumber && city && state) {
		localStorage.setItem('fName', fName)
		localStorage.setItem('lName', lName)
		localStorage.setItem('country', country)
		localStorage.setItem('pNumber', pNumber)
		localStorage.setItem('city', city)
		localStorage.setItem('state', state)
	}

	updateCard()
}

const updateCard = () => {}
