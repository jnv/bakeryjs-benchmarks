const { Program } = require('bakeryjs')

const program = new Program(
	{},
	{
		componentPaths: [`${__dirname}/components/`],
	}
)

const job = {
	process: [['counter-inf'], ['passthrough']],
}

program.run(job, msg => {
	const { counter } = msg
	console.log(counter);
})
