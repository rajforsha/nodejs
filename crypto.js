var crypto=require('crypto-js');

var secretmessage={
  name:'shashi',
  secretname:'facebook'
};

 var secretkey='123abc';

 var encryptmessage=crypto.AES.encrypt(JSON.stringify(secretmessage),secretkey);
 console.log('encrypted message'+encryptmessage);

 var bytes=crypto.AES.decrypt(encryptmessage,secretkey);
 var decryptedmesage=JSON.parse(bytes.toString(crypto.enc.Utf8));
 console.log('decryptmesage'+decryptedmesage.name);
