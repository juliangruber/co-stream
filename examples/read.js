var co = require('co');
var wait = require('co-wait');

co(function*(){

  function dates(){
    var i = 0;
    return function*(){
      if (++i == 3) return;
      yield wait(1000);
      return Date.now()+'';
    }
  }
  
  var data;
  var read = dates();
  
  while (data = yield read()) {
    console.log('data: %s', data);
  }
  
  console.log('done reading');

})();