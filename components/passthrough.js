const { boxFactory } = require('bakeryjs')

const Passthrough = boxFactory(
	{
		requires: [],
		provides: ['pass'],
		emits: [],
		aggregates: false,
	},
	function processValue(services, input) {
		const pass = input.pass || 0
		return { pass: pass + 1 }
	}
)
module.exports = Passthrough
