System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Child, BinaryTree;
    return {
        setters:[],
        execute: function() {
            Child = (function () {
                function Child(data) {
                    this.data = data;
                }
                Child.prototype.printData = function () {
                    console.log(this.data);
                };
                return Child;
            }());
            exports_1("Child", Child);
            BinaryTree = (function () {
                function BinaryTree(initData) {
                    this.root = new Child(initData);
                }
                BinaryTree.prototype.insert = function (child) {
                    this.insertHelper(this.root, child);
                };
                BinaryTree.prototype.insertHelper = function (root, child) {
                    if (child.data >= root.data) {
                        if (root.right) {
                            this.insertHelper(root.right, child);
                        }
                        else {
                            root.right = child;
                        }
                    }
                    else if (child.data < root.data) {
                        if (root.left) {
                            this.insertHelper(root.left, child);
                        }
                        else {
                            root.left = child;
                        }
                    }
                };
                BinaryTree.prototype.traversal = function (type) {
                    if (type === void 0) { type = 'in'; }
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
                    }
                    return result;
                };
                BinaryTree.prototype.preOrderTraversal = function (root, dataArr) {
                    if (!root)
                        return;
                    dataArr.push(root.data);
                    this.preOrderTraversal(root.left, dataArr);
                    this.preOrderTraversal(root.right, dataArr);
                };
                BinaryTree.prototype.inOrderTraversal = function (root, dataArr) {
                    if (!root)
                        return;
                    this.inOrderTraversal(root.left, dataArr);
                    dataArr.push(root.data);
                    this.inOrderTraversal(root.right, dataArr);
                };
                BinaryTree.prototype.postOrderTraversal = function (root, dataArr) {
                    if (!root)
                        return;
                    this.postOrderTraversal(root.left, dataArr);
                    this.postOrderTraversal(root.right, dataArr);
                    dataArr.push(root.data);
                };
                BinaryTree.prototype.search = function (data) {
                    return this.searchHelper(this.root, data);
                };
                BinaryTree.prototype.searchHelper = function (root, data) {
                    if (!root) {
                        return null;
                    }
                    if (data === root.data) {
                        return root.data;
                    }
                    else if (data > root.data) {
                        return this.searchHelper(root.right, data);
                    }
                    else if (data < root.data) {
                        return this.searchHelper(root.left, data);
                    }
                };
                BinaryTree.prototype.print = function () {
                    this.printHelper(this.root);
                };
                BinaryTree.prototype.printHelper = function (root) {
                    if (!root)
                        return;
                    this.printHelper(root.left);
                    root.printData();
                    this.printHelper(root.right);
                };
                return BinaryTree;
            }());
            exports_1("BinaryTree", BinaryTree);
        }
    }
});
//# sourceMappingURL=BinaryTree.js.map