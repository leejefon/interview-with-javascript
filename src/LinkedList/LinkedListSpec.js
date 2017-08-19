import test from 'ava';
import { List, Node } from './LinkedList';

test('Linked List Test', (t) => {
  const list = new List(10);

  list.append(new Node(20));
  list.append(new Node(30));

  t.is(list.head.data, 10);
  t.is(list.head.next.data, 20);
  t.is(list.head.next.next.data, 30);
  });
