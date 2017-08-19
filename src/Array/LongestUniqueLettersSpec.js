import test from 'ava';
import LongestUniqueLetters from './LongestUniqueLetters';

test('Longest Substring without Repeating Characters', (t) => {
  const str = 'abcabcbb';
  const result = 'abc';

  t.is(LongestUniqueLetters.exec(str), result.length, 'Should equal');
});
