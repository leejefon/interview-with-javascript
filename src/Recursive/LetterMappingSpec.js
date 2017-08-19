import test from 'ava';
import LetterMapping from './LetterMapping';

test('Letter map to numbers', (t) => {
  const num = 1221;
  const result = ['ABU', 'ABBA', 'AVA', 'LU', 'LBA'];

  t.deepEqual(LetterMapping.exec(num), result);
});
