const BinaryTree = require('./BinaryTree').BinaryTree;
const Node = require('./BinaryTree').Node;

const Color = {
  RED: 'RED',
  BLACK: 'BLACK'
};

class RedBlackNode extends Node {
  constructor(initData) {
    super(initData);
    this.color = Color.BLACK;
  }

  print() {
    console.log(this.data + ' ' + this.color);
  }
}

class RedBlackTree extends BinaryTree {
  insert(node) {
    node.color = Color.RED;
    super.insert(node);
    this.adjustTree(node);
  }

  adjustTree(node) {
    const parent = node.getParent(this.root);
    const uncle = node.getUncle(this.root);
    const grandParent = parent ? parent.getParent(this.root) : null;

    if (node &&
      JSON.stringify(node) !== JSON.stringify(this.root) &&
      parent.color === Color.RED
    ) {
      if (uncle && uncle.color === Color.RED) { // Recolor
        parent.color = Color.BLACK;
        uncle.color = Color.BLACK;
        grandParent.color = Color.RED;
      } else if (grandParent && parent.data < grandParent.data) { // Left of grandparent
        if (node.data > parent.data) { // right of parent
          this.rotateLeft(parent, grandParent);
          node.color = Color.BLACK;
          grandParent.color = Color.RED;
        } else {
          parent.color = Color.BLACK;
          grandParent.color = Color.RED;
        }

        this.rotateRight(grandParent, grandParent.getParent(this.root));
      } else if (grandParent && parent.data > grandParent.data) { // Right of grandparent
        if (node.data < parent.data) { // left of parent
          this.rotateRight(parent, grandParent);
          node.color = Color.BLACK;
          grandParent.color = Color.RED;
        } else {
          parent.color = Color.BLACK;
          grandParent.color = Color.RED;
        }

        this.rotateLeft(grandParent, grandParent.getParent(this.root));
      }
    }

    this.root.color = Color.BLACK;
  }

  rotateRight(node, parent) {
    let x = node.left;
    node.left = x.right;
    x.right = node;

    if (parent) {
      if (x.data > parent.data) parent.right = x;
      else parent.left = x;
    }
  }

  rotateLeft(node, parent) {
    let x = node.right;
    node.right = x.left;
    x.left = node;

    if (parent) {
      if (x.data > parent.data) parent.right = x;
      else parent.left = x;
    }
  }
}

module.exports = {
  Color,
  RedBlackNode,
  RedBlackTree
};
