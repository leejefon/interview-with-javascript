

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

    traversal(type: string = 'in') {
        var result = [];

        switch (type) {
            case 'pre':
                this.preOrderTraversal(this.root, result);
                break;
            case 'in':
                this.inOrderTraversal(this.root, result);
                break;
            case 'post':
                this.postOrderTraversal(this.root, result);
                break;
            case 'level':
                this.levelOrderTraversal(this.root, result);
                break;
        }

        return result;
    }

    private preOrderTraversal(root: Child, dataArr) {
        if (!root) return;

        dataArr.push(root.data);
        this.preOrderTraversal(root.left, dataArr);
        this.preOrderTraversal(root.right, dataArr);
    }

    private inOrderTraversal(root: Child, dataArr) {
        if (!root) return;

        this.inOrderTraversal(root.left, dataArr);
        dataArr.push(root.data);
        this.inOrderTraversal(root.right, dataArr);
    }

    private postOrderTraversal(root: Child, dataArr) {
        if (!root) return;

        this.postOrderTraversal(root.left, dataArr);
        this.postOrderTraversal(root.right, dataArr);
        dataArr.push(root.data);
    }

    private levelOrderTraversal(root: Child, dataArr, level: number = 0) {
        if (!root) return;

        if (dataArr[level]) {
            dataArr[level].push(root.data);
        } else {
            dataArr[level] = [root.data];
        }

        this.levelOrderTraversal(root.left, dataArr, level + 1);
        this.levelOrderTraversal(root.right, dataArr, level + 1);

        return dataArr;
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

    print() {
        this.printHelper(this.root);
    }

    private printHelper(root: Child) {
        if (!root) return;
        this.printHelper(root.left);
        root.printData();
        this.printHelper(root.right);
    }
}
