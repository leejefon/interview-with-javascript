import test from 'ava';
import CoinChange from './CoinChange';

test('Coin Change', (t) => {
  const coins = [1, 2, 5];
  const amount = 11;
  const result = 3;

  t.is(CoinChange.exec(coins, amount), result);
});

test('Coin Change', (t) => {
  const coins = [2, 4];
  const amount = 11;
  const result = -1;

  t.is(CoinChange.exec(coins, amount), result);
});
