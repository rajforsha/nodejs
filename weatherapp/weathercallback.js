var weather=require('./weatherinfo.js');

weather(function(currentweather){
  console.log(currentweather)
});
