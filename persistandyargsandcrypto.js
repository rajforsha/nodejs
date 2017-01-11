var storage = require('node-persist');
storage.initSync();

var crypto=require('crypto-js');

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
                alias: 'p',
                description: 'Your last name goes here',
                type: 'string'
            },
						masterpassword: {
                demand: true,
                alias: 'm',
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
              },
              masterpassword: {
                  demand: true,
                  alias: 'm',
                  description: 'Your last name goes here',
                  type: 'string'
              }
          }).help('help');
      })

    .help('help')
    .argv;

var command = argv._[0];

function createAccount (account,masterpassword) {
    var accounts = storage.getItemSync('database');
    if (typeof accounts === 'undefined') {
      console.log('its empty');
        accounts = [];
    }
    try{
      var encryptmessage=crypto.AES.encrypt(JSON.stringify(account),masterpassword);
      console.log('encrypted::'+encryptmessage);
      storage.setItemSync('database', encryptmessage.toString());
      return account;
    }
    catch (e) {
          console.log('Unable to create account.');
      }
}

function getAccount (accountName,masterpassword) {
    var accounts = storage.getItemSync('database');
      accounts = [];
    var bytes=crypto.AES.decrypt(accounts,masterpassword);
    var decryptedmesage=JSON.parse(bytes.toString(crypto.enc.Utf8));
    var matchedAccount;
    decryptedmesage.forEach(function (account) {
        if (account.name === accountName) {
            matchedAccount = account;
        }
    });
    return matchedAccount;
}

 if(command === 'create' && typeof argv.name !=='undefined'&& typeof argv.password !=='undefined'&&typeof argv.masterpassword !=='undefined'){
		console.log('Hello ' + argv.name+ argv.password+argv.masterpassword);
    var createdAccount = createAccount({
        name: argv.name,
        password: argv.password,
        masterpassword:argv.masterpassword
    },argv.masterpassword);
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
