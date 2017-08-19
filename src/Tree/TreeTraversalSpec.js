import test from 'ava';
import { BinaryTree, Node } from './BinaryTree';
import TreeTraversal from './TreeTraversal';

test('Binary Tree Traversal - preorder', (t) => {
  const tree = new BinaryTree(new Node(50));

  tree.insert(new Node(40));
  tree.insert(new Node(30));
  tree.insert(new Node(60));
  tree.insert(new Node(70));

  t.deepEqual(TreeTraversal.preOrder(tree.root), [50, 40, 30, 60, 70]);
});

test('Binary Tree Traversal - inorder', (t) => {
  const tree = new BinaryTree(new Node(50));

  tree.insert(new Node(40));
  tree.insert(new Node(30));
  tree.insert(new Node(60));
  tree.insert(new Node(70));

  t.deepEqual(TreeTraversal.inOrder(tree.root), [30, 40, 50, 60, 70]);
});

test('Binary Tree Traversal - postorder', (t) => {
  const tree = new BinaryTree(new Node(50));

  tree.insert(new Node(40));
  tree.insert(new Node(30));
  tree.insert(new Node(60));
  tree.insert(new Node(70));

  t.deepEqual(TreeTraversal.postOrder(tree.root), [30, 40, 70, 60, 50]);
});

test('Binary Tree Traversal - levelorder', (t) => {
  const tree = new BinaryTree(new Node(50));

  tree.insert(new Node(40));
  tree.insert(new Node(30));
  tree.insert(new Node(60));
  tree.insert(new Node(70));

  const result = [
    [50],
    [40, 60],
    [30, 70]
  ];

  t.deepEqual(TreeTraversal.levelOrder(tree.root), result);
});
