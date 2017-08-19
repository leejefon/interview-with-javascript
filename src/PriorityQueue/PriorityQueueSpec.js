import test from 'ava';
import PriorityQueue from './PriorityQueue';

test('Priority Queue - default priority', (t) => {
  const pq = new PriorityQueue();

  pq.add(3);
  pq.add(2);
  pq.add(1);

  t.deepEqual(pq.toArray(), [3, 2, 1]);
});

test('Priority Queue - custom comparator', (t) => {
  const pq = new PriorityQueue((a, b) => b - a);

  pq.add(3);
  pq.add(2);
  pq.add(1);

  t.deepEqual(pq.toArray(), [1, 2, 3]);
});
