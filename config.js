var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'apontador'
    },
    port: process.env.PORT || 3000,
    ip: process.env.IP || '0.0.0.0',
    clientId: 'testefront',
    secretId: 'jO98nsGN6rXlmWXKKxnwS9NogdD~'
  },

  test: {
    root: rootPath,
    app: {
      name: 'apontador'
    },
    port: process.env.PORT || 3000,
    ip: process.env.IP || '0.0.0.0',
    clientId: 'testefront',
    secretId: 'jO98nsGN6rXlmWXKKxnwS9NogdD~'
  },

  production: {
    root: rootPath,
    app: {
      name: 'apontador'
    },
    port: process.env.PORT || 3000,
    ip: process.env.IP || '0.0.0.0',
    clientId: 'testefront',
    secretId: 'jO98nsGN6rXlmWXKKxnwS9NogdD~'
  }
};

module.exports = config[env];
