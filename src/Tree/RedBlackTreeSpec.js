import test from 'ava';
import { RedBlackTree, RedBlackNode, Color } from './RedBlackTree';

test('Red Black Tree - recolring test: (self, parent, uncle) all red', (t) => {
  const tree = new RedBlackTree(new RedBlackNode(50));

  tree.insert(new RedBlackNode(40));
  tree.insert(new RedBlackNode(60));
  tree.insert(new RedBlackNode(70));

  t.is(tree.root.color, Color.BLACK);
  t.is(tree.root.left.color, Color.BLACK);
  t.is(tree.root.right.color, Color.BLACK);
  t.is(tree.root.right.right.color, Color.RED);
});

test('Red Black Tree - reconstruct test: right -> right', (t) => {
  const tree = new RedBlackTree(new RedBlackNode(50));

  tree.insert(new RedBlackNode(40));
  tree.insert(new RedBlackNode(60));
  tree.insert(new RedBlackNode(70));
  tree.insert(new RedBlackNode(80));

  t.is(tree.root.color, Color.BLACK); // 50
  t.is(tree.root.left.color, Color.BLACK); // 40

  t.is(tree.root.right.data, 70);
  t.is(tree.root.right.color, Color.BLACK);

  t.is(tree.root.right.left.data, 60);
  t.is(tree.root.right.left.color, Color.RED);

  t.is(tree.root.right.right.data, 80);
  t.is(tree.root.right.right.color, Color.RED);
});

test('Red Black Tree - reconstruct test: right -> left', (t) => {
  const tree = new RedBlackTree(new RedBlackNode(50));

  tree.insert(new RedBlackNode(40));
  tree.insert(new RedBlackNode(60));
  tree.insert(new RedBlackNode(80));
  tree.insert(new RedBlackNode(70));

  t.is(tree.root.color, Color.BLACK); // 50
  t.is(tree.root.left.color, Color.BLACK); // 40

  t.is(tree.root.right.data, 70);
  t.is(tree.root.right.color, Color.BLACK);

  t.is(tree.root.right.left.data, 60);
  t.is(tree.root.right.left.color, Color.RED);

  t.is(tree.root.right.right.data, 80);
  t.is(tree.root.right.right.color, Color.RED);
});

test('Red Black Tree - reconstruct test: left -> right', (t) => {
  const tree = new RedBlackTree(new RedBlackNode(50));

  tree.insert(new RedBlackNode(40));
  tree.insert(new RedBlackNode(60));
  tree.insert(new RedBlackNode(20));
  tree.insert(new RedBlackNode(30));

  t.is(tree.root.color, Color.BLACK); // 50
  t.is(tree.root.right.color, Color.BLACK); // 60

  t.is(tree.root.left.data, 30);
  t.is(tree.root.left.color, Color.BLACK);

  t.is(tree.root.left.left.data, 20);
  t.is(tree.root.left.left.color, Color.RED);

  t.is(tree.root.left.right.data, 40);
  t.is(tree.root.left.right.color, Color.RED);
});

test('Red Black Tree - reconstruct test: left -> left', (t) => {
  const tree = new RedBlackTree(new RedBlackNode(50));

  tree.insert(new RedBlackNode(40));
  tree.insert(new RedBlackNode(60));
  tree.insert(new RedBlackNode(30));
  tree.insert(new RedBlackNode(20));

  t.is(tree.root.color, Color.BLACK); // 50
  t.is(tree.root.right.color, Color.BLACK); // 60

  t.is(tree.root.left.data, 30);
  t.is(tree.root.left.color, Color.BLACK);

  t.is(tree.root.left.left.data, 20);
  t.is(tree.root.left.left.color, Color.RED);

  t.is(tree.root.left.right.data, 40);
  t.is(tree.root.left.right.color, Color.RED);
});
