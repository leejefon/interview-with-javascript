import test from 'ava';
import Digit from './Digit';

test('Digit - Count digit 1s', (t) => {
  t.is(Digit.count(99), 20);
});

test('Digit - repeatedly add digits', (t) => {
  t.is(Digit.root(38), 2);
});
