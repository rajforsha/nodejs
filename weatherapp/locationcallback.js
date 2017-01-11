var location=require('./locationinfo.js');

location(function(location){
  if(!location){
    console.log('unable to guess location!');
    return;
  }
  console.log('lon/lat::'+location.loc);
})
