var database = require('node-persist');
database.initSync();

var argv = require('yargs')
  .command('create', 'Create a new account', function (yargs) {
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'Your first name goes here',
                type: 'string'
            },
            password: {
                demand: true,
                alias: 'c',
                description: 'Your last name goes here',
                type: 'string'
            },
						country: {
                demand: true,
                alias: 'co',
                description: 'Your last name goes here',
                type: 'string'
            }
        }).help('help');
    })
    .command('get', 'Get an existing account', function (yargs) {
          yargs.options({
              name: {
                  demand: true,
                  alias: 'n',
                  description: ' name ',
                  type: 'string'
              }
          }).help('help');
      })

    .help('help')
    .argv;

var command = argv._[0];

function createAccount (account) {
    var accounts = database.getItemSync('accounts');
    if (typeof accounts === 'undefined') {
        accounts = [];
    }

    accounts.push(account);
    database.setItemSync('accounts', accounts);

    return account;
}

function getAccount (accountName) {
    var accounts = database.getItemSync('accounts');
    var matchedAccount;
    accounts.forEach(function (account) {
        if (account.name === accountName) {
            matchedAccount = account;
        }
    });

    return matchedAccount;
}

 if(command === 'create' && typeof argv.name !=='undefined'&& typeof argv.password !=='undefined'&&typeof argv.country !=='undefined'){
		console.log('Hello ' + argv.name+ argv.city+argv.country);
    var createdAccount = createAccount({
        name: argv.name,
        password: argv.password,
        country: argv.country
    });
    console.log('Account created!');
    console.log(createdAccount);
}
 else if (command === 'get') {
   var fetchedAccount = getAccount(argv.name);
    if (typeof fetchedAccount === 'undefined') {
        console.log('Account not found');
    } else {
        console.log('Account found!');
        console.log(fetchedAccount);
    }
}
