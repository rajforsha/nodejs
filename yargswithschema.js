var argv = require('yargs')
    .command('adduser', 'Greets the user', function (yargs) {
        yargs.options({
            name: {
                demand: false,
                alias: 'n',
                description: 'Your first name goes here',
                type: 'string'
            },
            city: {
                demand: false,
                alias: 'c',
                description: 'Your last name goes here',
                type: 'string'
            },
						country: {
                demand: false,
                alias: 'co',
                description: 'Your last name goes here',
                type: 'string'
            }
        }).help('help');
    })

    .help('help')
    .argv;
		
var command = argv._[0];

 if(command === 'hello' && typeof argv.name !=='undefined'&& typeof argv.city !=='undefined'&&typeof argv.country !=='undefined'){
		console.log('Hello ' + argv.name+ argv.city+argv.country);
}
else if(command === 'hello' && typeof argv.name !=='undefined'&& typeof argv.city !=='undefined'){
		console.log('Hello ' + argv.name+ argv.city);
}

else if (command === 'hello' && typeof argv.name !=='undefined') {
	console.log('Hello ' + argv.name);

}
 else if (command === 'hello') {
	console.log('Hello world!');
}
