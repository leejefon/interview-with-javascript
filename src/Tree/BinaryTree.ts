
export class Node {

    data: any;
    left: Node;
    right: Node

    constructor(data?) {
        this.data = data;
    }

    getParent(root: Node) {
        if (!root) return null;

        var left: Node = null;
        var right: Node = null;

        if (JSON.stringify(root.left) === JSON.stringify(this) || JSON.stringify(root.right) === JSON.stringify(this)) {
            return root;
        }

        left = this.getParent(root.left);
        right = this.getParent(root.right);

        return left ? left : right;
    }

    getUncle(root: Node) {
        if (!root) return null;

        var parent = this.getParent(root);
        var grandParent = parent ? parent.getParent(root) : null;

        if (!grandParent) return null;
        else if (this.data > grandParent.data) return grandParent.left;
        else return grandParent.right;
    }

    print() {
        console.log(this.data);
    }
}

export class BinaryTree {
    root: Node;

    constructor(root: Node) {
        this.root = root;
    }

    insert(node: Node) {
        this.insertHelper(this.root, node);
    }

    private insertHelper(root: Node, node: Node) {
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

    private searchHelper(root: Node, data: any) {
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

    private printHelper(root: Node) {
        if (!root) return;
        this.printHelper(root.left);
        root.print();
        this.printHelper(root.right);
    }
}
