class Node {
  constructor(data) {
    this.data = data;
  }

  getParent(root) {
    if (!root) return null;

    let left = null;
    let right = null;

    if (JSON.stringify(root.left) === JSON.stringify(this) || JSON.stringify(root.right) === JSON.stringify(this)) {
      return root;
    }

    left = this.getParent(root.left);
    right = this.getParent(root.right);

    return left ? left : right;
  }

  getUncle(root) {
    if (!root) return null;

    const parent = this.getParent(root);
    const grandParent = parent ? parent.getParent(root) : null;

    if (!grandParent) return null;
    else if (this.data > grandParent.data) return grandParent.left;
    else return grandParent.right;
  }

  print() {
    console.log(this.data);
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  insert(node) {
    this.insertHelper(this.root, node);
  }

  insertHelper(root, node) {
    if (node.data >= root.data) {
      if (root.right) {
        this.insertHelper(root.right, node);
      } else {
        root.right = node;
      }
    } else if (node.data < root.data) {
      if (root.left) {
        this.insertHelper(root.left, node);
      } else {
        root.left = node;
      }
    }
  }

  search(data) {
    return this.searchHelper(this.root, data);
  }

  searchHelper(root, data) {
    if (!root) {
      return null;
    }

    if (data === root.data) {
      return root.data;
    } else if (data > root.data) {
      return this.searchHelper(root.right, data);
    } else if (data < root.data) {
      return this.searchHelper(root.left, data);
    }
  }

  print() {
    this.printHelper(this.root);
  }

  printHelper(root) {
    if (!root) return;
    this.printHelper(root.left);
    root.print();
    this.printHelper(root.right);
  }
}

module.exports = {
  Node,
  BinaryTree
};
