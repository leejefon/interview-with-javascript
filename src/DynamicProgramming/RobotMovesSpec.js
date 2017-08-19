import test from 'ava';
import RobotMoves from './RobotMoves';

test('Unique robot move paths', (t) => {
  const board = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ];

  t.is(RobotMoves.exec(board), 2);
});
