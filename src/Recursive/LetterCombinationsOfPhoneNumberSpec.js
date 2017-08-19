import test from 'ava';
import LetterCombinationsOfPhoneNumber from './LetterCombinationsOfPhoneNumber';

test('Letter combinations of phone number', (t) => {
  const phone = '23';
  const result = ['AD', 'AE', 'AF', 'BD', 'BE', 'BF', 'CD', 'CE', 'CF'];

  t.deepEqual(LetterCombinationsOfPhoneNumber.exec(phone), result);
})
