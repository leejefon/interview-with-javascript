System.register(['./BinaryTree'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var BinaryTree_1;
    var Color, RedBlackNode, RedBlackTree;
    return {
        setters:[
            function (BinaryTree_1_1) {
                BinaryTree_1 = BinaryTree_1_1;
            }],
        execute: function() {
            Color = (function () {
                function Color() {
                }
                Color.RED = 'RED';
                Color.BLACK = 'BLACK';
                return Color;
            }());
            exports_1("Color", Color);
            RedBlackNode = (function (_super) {
                __extends(RedBlackNode, _super);
                function RedBlackNode(initData) {
                    _super.call(this, initData);
                    this.color = Color.BLACK;
                }
                RedBlackNode.prototype.print = function () {
                    console.log(this.data + ' ' + this.color);
                };
                return RedBlackNode;
            }(BinaryTree_1.Node));
            exports_1("RedBlackNode", RedBlackNode);
            RedBlackTree = (function (_super) {
                __extends(RedBlackTree, _super);
                function RedBlackTree(root) {
                    _super.call(this, root);
                }
                RedBlackTree.prototype.insert = function (node) {
                    node.color = Color.RED;
                    _super.prototype.insert.call(this, node);
                    this.adjustTree(node);
                };
                RedBlackTree.prototype.adjustTree = function (node) {
                    var parent = node.getParent(this.root);
                    var uncle = node.getUncle(this.root);
                    var grandParent = parent ? parent.getParent(this.root) : null;
                    if (node &&
                        JSON.stringify(node) !== JSON.stringify(this.root) &&
                        parent.color === Color.RED) {
                        if (uncle && uncle.color === Color.RED) {
                            parent.color = Color.BLACK;
                            uncle.color = Color.BLACK;
                            grandParent.color = Color.RED;
                        }
                        else if (grandParent && parent.data < grandParent.data) {
                            if (node.data > parent.data) {
                                this.rotateLeft(parent, grandParent);
                                node.color = Color.BLACK;
                                grandParent.color = Color.RED;
                            }
                            else {
                                parent.color = Color.BLACK;
                                grandParent.color = Color.RED;
                            }
                            this.rotateRight(grandParent, grandParent.getParent(this.root));
                        }
                        else if (grandParent && parent.data > grandParent.data) {
                            if (node.data < parent.data) {
                                this.rotateRight(parent, grandParent);
                                node.color = Color.BLACK;
                                grandParent.color = Color.RED;
                            }
                            else {
                                parent.color = Color.BLACK;
                                grandParent.color = Color.RED;
                            }
                            this.rotateLeft(grandParent, grandParent.getParent(this.root));
                        }
                    }
                    this.root.color = Color.BLACK;
                };
                RedBlackTree.prototype.rotateRight = function (node, parent) {
                    var x = node.left;
                    node.left = x.right;
                    x.right = node;
                    if (parent) {
                        if (x.data > parent.data)
                            parent.right = x;
                        else
                            parent.left = x;
                    }
                };
                RedBlackTree.prototype.rotateLeft = function (node, parent) {
                    var x = node.right;
                    node.right = x.left;
                    x.left = node;
                    if (parent) {
                        if (x.data > parent.data)
                            parent.right = x;
                        else
                            parent.left = x;
                    }
                };
                return RedBlackTree;
            }(BinaryTree_1.BinaryTree));
            exports_1("RedBlackTree", RedBlackTree);
        }
    }
});
//# sourceMappingURL=RedBlackTree.js.map