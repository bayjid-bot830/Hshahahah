const chalk = require('chalk');
module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#00FF00").bold('[ Error ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#00FF00").bold('[ Error ] »') + data);
     break;
		default:			        
                        console.log(chalk.bold.hex("#00FF00").bold(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#00FF00").bold('[ 𝐌𝐑.𝐁𝐎𝐒𝐒 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍  ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#00FF00").bold('[ 𝐌𝐑.𝐁𝐎𝐒𝐒 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍  ] » ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#00FF00").bold(`[ 𝐌𝐑.𝐁𝐎𝐒𝐒 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍  ] » `) + data);
			break;
	}
	}