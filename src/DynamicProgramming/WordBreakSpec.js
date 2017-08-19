import test from 'ava';
import WordBreak from './WordBreak';

test('Word Break', (t) => {
  const dict = ['be', 'bed', 'and', 'bath'];
  const str = 'bedandbath';
  const str2 = 'beddanbath';

  t.is(WordBreak.exec(str, dict), true);
  t.is(WordBreak.exec(str2, dict), false);
});
