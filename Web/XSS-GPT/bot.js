var webPage = require('webpage');
var page = webPage.create();
var system = require('system');
var args = system.args;

phantom.addCookie({
  'name'     : 'flag',
  'value'    : 'this_is_not_the_flag',
  'domain'   : '127.0.0.1',
  'path'     : '/',
  'httponly' : false,
  'secure'   : false,
  'expires'  : (new Date()).getTime() + (1000 * 60 * 60)
});

page.open("http://127.0.0.1/?apiKey="+args[1], function(status) {
  setTimeout(function(){
    console.log("success");
    phantom.exit(0);
  }, 3000);
});