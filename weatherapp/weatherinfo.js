var request=require('request');

var url='http://api.openweathermap.org/data/2.5/weather?q=London&appid=b5be13373ec7e921785f74739b1e5c0a';

module.exports=function(callback){
  request({
    url:url,
    json:true
  },function(error,response,body){
    if(error){
    callback('unable to fetch weather!');
    }
    else{
      callback('it'+body.main.temp+' in '+body.name+' ! ');
    }
  });
}
