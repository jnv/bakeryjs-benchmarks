const { Program } = require('bakeryjs')

const program = new Program(
	{},
	{
		componentPaths: [`${__dirname}/components/`],
	}
)

const job = {
	process: [['timer-inf'], ['passthrough']],
}

program.run(job, msg => {
	const { timer } = msg
	console.timeEnd(timer)
	// console.log('Drain received a message', msg);
})
