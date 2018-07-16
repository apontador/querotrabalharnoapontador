var apontador = require('node-apontador');
var config = require(__base + 'config/config.js');

var client = apontador.createClient({
    clientSecret: config.secretId,
    clientId: config.clientId
});

module.exports = client;