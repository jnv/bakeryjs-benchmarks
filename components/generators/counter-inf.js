const { boxFactory } = require('bakeryjs')
const { promisify } = require('util')

const wait = promisify(setTimeout)

const CounterInf = boxFactory(
	{
		requires: [],
		provides: ['counter'],
		emits: ['counter'],
		aggregates: false,
	},
	async function processValue(serviceProvider, value, emitCallback) {
		let i = 0
		while (true) {
			emitCallback([{ counter: i++ }])
			await wait(100)
		}
	}
)

module.exports = CounterInf
