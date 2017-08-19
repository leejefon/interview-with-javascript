import test from 'ava';
import ReversePolishNotation from './ReversePolishNotation';

test('Evaluate Reverse Polish Notation (Stack)', (t) => {
  const arr = ['2', '1', '+', '3', '*'];
  const result = 9;

  t.deepEqual(ReversePolishNotation.exec(arr), result);
});
