var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),  
  path = require('path');
  
global.__base = __dirname + '/';

var app = express();

require('./config/express')(app, config);

app.listen(config.port, config.ip, function () {
  console.log('Express server listening on port ' + config.port);
});

require('./app/internal/api');
