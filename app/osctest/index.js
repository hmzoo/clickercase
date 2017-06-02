var OscReceiver = require('osc-receiver')
  , receiver = new OscReceiver();
 
receiver.bind(8082);
 
receiver.on('/j1', function(a, b, c) {
  // do something. 
});
 
receiver.on('/sol1', function(x, y) {
  // do something. 
});
 
receiver.on('message', function() {
  // handle all messages 
  var address = arguments[0];
  var args = Array.prototype.slice.call(arguments, 1);
console.log(address,args);
});

