console.log('welcome to password manager.');
 var storage=require('node-persist');
 storage.initSync();

 storage.setItemSync('accounts',[{
   username:'Asreet',
   balance:100
 },{
   username:'mydata',
   balance:1000
 }]
 );

  var accounts=storage.getItemSync('accounts');
  accounts.push({
    username:'jen',
    balance:75
  });

  storage.setItemSync('accounts',accounts);
  console.log(accounts);
