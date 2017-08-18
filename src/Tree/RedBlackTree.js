import { BinaryTree, Node } from './BinaryTree';

export enum Color {
  RED,
  BLACK
}

export class RedBlackNode extends Node {
  color: Color;

  public constructor(initData) {
    super(initData);
    this.color = Color.BLACK;
  }

  public print(): void {
    console.log(this.data + ' ' + this.color);
  }
}

export class RedBlackTree extends BinaryTree {
  public constructor(root: RedBlackNode) {
    super(root);
  }

  public insert(node: RedBlackNode): void {
    node.color = Color.RED;
    super.insert(node);
    this.adjustTree(node);
  }

  private adjustTree(node: RedBlackNode): void {
    var parent: RedBlackNode = <RedBlackNode> node.getParent(this.root);
    var uncle: RedBlackNode = <RedBlackNode> node.getUncle(this.root);
    var grandParent: RedBlackNode = parent ? <RedBlackNode> parent.getParent(this.root) : null;

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

        this.rotateRight(grandParent, <RedBlackNode> grandParent.getParent(this.root));
      } else if (grandParent && parent.data > grandParent.data) { // Right of grandparent
        if (node.data < parent.data) { // left of parent
          this.rotateRight(parent, grandParent);
          node.color = Color.BLACK;
          grandParent.color = Color.RED;
        } else {
          parent.color = Color.BLACK;
          grandParent.color = Color.RED;
        }

        this.rotateLeft(grandParent, <RedBlackNode> grandParent.getParent(this.root));
      }
    }

    (<RedBlackNode> this.root).color = Color.BLACK;
  }

  private rotateRight(node: RedBlackNode, parent: RedBlackNode): void {
    var x: RedBlackNode = <RedBlackNode> node.left;
    node.left = x.right;
    x.right = node;

    if (parent) {
      if (x.data > parent.data) parent.right = x;
      else parent.left = x;
    }
  }

  private rotateLeft(node: RedBlackNode, parent: RedBlackNode): void {
    var x: RedBlackNode = <RedBlackNode> node.right;
    node.right = x.left;
    x.left = node;

    if (parent) {
      if (x.data > parent.data) parent.right = x;
      else parent.left = x;
    }
  }
}
