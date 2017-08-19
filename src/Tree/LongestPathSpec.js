import test from 'ava';
import { BinaryTree, Node } from './BinaryTree';
import LongestPath from './LongestPath';

test('Longest Path', (t) => {
  const tree = new BinaryTree(new Node(10));

  tree.insert(new Node(5));
  tree.insert(new Node(3));
  tree.insert(new Node(1));
  tree.insert(new Node(7));
  tree.insert(new Node(9));

  t.is(LongestPath.exec(tree.root).length, 5);
});
