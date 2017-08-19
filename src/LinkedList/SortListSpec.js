import test from 'ava';
import { List, Node } from './LinkedList';
import SortList from './SortList';

test('Sort List', (t) => {
  const list = new List(20);

  list.append(new Node(40));
  list.append(new Node(30));
  list.append(new Node(60));
  list.append(new Node(10));
  list.append(new Node(50));

  list.head = SortList.sort(list.head);

  t.is(list.head.data, 10);
  t.is(list.head.next.data, 20);
  t.is(list.head.next.next.data, 30);
  t.is(list.head.next.next.next.data, 40);
  t.is(list.head.next.next.next.next.data, 50);
  t.is(list.head.next.next.next.next.next.data, 60);
});
