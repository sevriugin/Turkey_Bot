'use strict';

const mongoose = require('mongoose')
	, config = require('../config');

require('./users');
require('./schedule');
require('./session');
require('./productproto');
require('./locations');
require('./product');
require('./order');

var options = {
    "user": process.env['dbLog'],
    "pass": process.env['dbPass'],
    "SSL":true
};

mongoose.connect(process.env['dbUrl'], options);

var db = mongoose.connection;
db.on('error', function (err) {
	throw console.error(err);
});
db.on('disconnected', function () {
	console.log('Disconnected from DB.');
})
db.once('open', function () {
	console.log('Connection to DB was opened.');
});

module.exports = db;
