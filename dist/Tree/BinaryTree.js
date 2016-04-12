System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Node, BinaryTree;
    return {
        setters:[],
        execute: function() {
            Node = (function () {
                function Node(data) {
                    this.data = data;
                }
                Node.prototype.getParent = function (root) {
                    if (!root)
                        return null;
                    var left = null;
                    var right = null;
                    if (JSON.stringify(root.left) === JSON.stringify(this) || JSON.stringify(root.right) === JSON.stringify(this)) {
                        return root;
                    }
                    left = this.getParent(root.left);
                    right = this.getParent(root.right);
                    return left ? left : right;
                };
                Node.prototype.getUncle = function (root) {
                    if (!root)
                        return null;
                    var parent = this.getParent(root);
                    var grandParent = parent ? parent.getParent(root) : null;
                    if (!grandParent)
                        return null;
                    else if (this.data > grandParent.data)
                        return grandParent.left;
                    else
                        return grandParent.right;
                };
                Node.prototype.print = function () {
                    console.log(this.data);
                };
                return Node;
            }());
            exports_1("Node", Node);
            BinaryTree = (function () {
                function BinaryTree(root) {
                    this.root = root;
                }
                BinaryTree.prototype.insert = function (node) {
                    this.insertHelper(this.root, node);
                };
                BinaryTree.prototype.insertHelper = function (root, node) {
                    if (node.data >= root.data) {
                        if (root.right) {
                            this.insertHelper(root.right, node);
                        }
                        else {
                            root.right = node;
                        }
                    }
                    else if (node.data < root.data) {
                        if (root.left) {
                            this.insertHelper(root.left, node);
                        }
                        else {
                            root.left = node;
                        }
                    }
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
                    root.print();
                    this.printHelper(root.right);
                };
                return BinaryTree;
            }());
            exports_1("BinaryTree", BinaryTree);
        }
    }
});
//# sourceMappingURL=BinaryTree.js.map