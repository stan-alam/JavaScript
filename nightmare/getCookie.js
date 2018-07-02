var Nightmare = require('nightmare');
var vo = require('vo');


vo(function* () {

  var nightmare = Nightmare({ show: true, switches: {
      'ignore-certificate-errors': true }
  });
  var  cookie = yield nightmare


    .goto('http://nannerl.io/')
    .type('input[name="username"]', 'user')
    .type('input[name="password"]', 'password')
    .click('button[id="login_submit"]')
    .wait(10000)
    cookie = nightmare.cookies.get('cookie');


  yield nightmare.end();
  return cookie;



})(function (err, result) {
  if (err) return console.log(err);
  console.log(result);

});
