import test from 'ava';
import GraphColoring from './GraphColoring';

test('Graph Coloring', (t) => {
  const graph = [
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 1, 0, 0]
  ];
  const numColors = 3;
  const result = [1, 2, 1, 2, 3, 2, 1, 3, 3, 2];

  const gc = new GraphColoring(graph, numColors);

  t.deepEqual(gc.solve(), result);
});
