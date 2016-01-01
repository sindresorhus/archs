import test from 'ava';
import m from './';

test(t => {
	t.true(m.indexOf(process.arch) !== -1);
});
