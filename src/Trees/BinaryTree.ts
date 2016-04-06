

export class Child {

    data: any;
    left: Child;
    right: Child

    constructor(data?) {
        this.data = data;
    }

    printData() {
        console.log(this.data);
    }
}

export class BinaryTree {
    root: Child;

    constructor(initData) {
        this.root = new Child(initData);
    }

    insert(child: Child) {
        this.insertHelper(this.root, child);
    }

    private insertHelper(root: Child, child: Child) {
        if (child.data >= root.data) {
            if (root.right) {
                this.insertHelper(root.right, child);
            } else {
                root.right = child;
            }
        } else if (child.data < root.data) {
            if (root.left) {
                this.insertHelper(root.left, child);
            } else {
                root.left = child;
            }
        }
    }

    print() {
        this.printHelper(this.root);
    }

    private printHelper(root: Child) {
        if (!root) return;
        this.printHelper(root.left);
        root.printData();
        this.printHelper(root.right);
    }

    search(data) {
        return this.searchHelper(this.root, data);
    }

    private searchHelper(root: Child, data: any) {
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
}
