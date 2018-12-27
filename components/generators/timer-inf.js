const { boxFactory } = require('bakeryjs')
const { promisify } = require('util')

const wait = promisify(setTimeout)

const TimerInf = boxFactory(
	{
		requires: [],
		provides: ['timer'],
		emits: ['timer'],
		aggregates: false,
	},
	async function processValue(serviceProvider, value, emitCallback) {
		let i = 0
		while (true) {
			const timer = `timer-${i}`
			i++
			console.time(timer)
			emitCallback([{ timer }])
			await wait(100)
		}
	}
)

module.exports = TimerInf
