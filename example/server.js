var zetta = require('zetta');
var Buzzer = require('../index');

zetta()
  .use(Buzzer, 3)
  .listen(1337);
