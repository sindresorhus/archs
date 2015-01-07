'use strict';
var test = require('ava');
var archs = require('./');

test(function (t) {
	t.assert(archs.indexOf(process.arch) !== -1);
	t.end();
});
