import process from 'node:process';
import test from 'ava';
import archs from './index.js';

test('main', t => {
	t.true(archs.includes(process.arch));
});
