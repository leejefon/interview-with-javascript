import test from 'ava';
import { BinaryTree, Node } from './BinaryTree';

test('Binary Tree Test - insert left and right', (t) => {
  const tree = new BinaryTree(new Node(50));

  tree.insert(new Node(40));
  tree.insert(new Node(60));

  t.is(tree.root.left.data, 40);
  t.is(tree.root.right.data, 60);
});

test('Binary Test Tree - search', (t) => {
  const tree = new BinaryTree(new Node(50));

  tree.insert(new Node(40));
  tree.insert(new Node(30));
  tree.insert(new Node(70));

  t.is(tree.search(10), null);
  t.is(tree.search(30), 30);
});
