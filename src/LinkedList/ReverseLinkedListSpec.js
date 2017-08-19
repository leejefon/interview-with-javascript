import test from 'ava';
import { List, Node } from './LinkedList';
import ReverseLinkedList from './ReverseLinkedList';

test('Reverse linked list', (t) => {
  const list = new List(10);

  list.append(new Node(20));
  list.append(new Node(30));
  list.append(new Node(40));
  list.append(new Node(50));
  list.append(new Node(60));

  t.deepEqual(ReverseLinkedList.exec(list.head).toArray(), [60, 50, 40, 30, 20, 10]);
});
