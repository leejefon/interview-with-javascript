System.register(['./BinaryTree', './TreeTraversal'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BinaryTree_1, TreeTraversal_1;
    return {
        setters:[
            function (BinaryTree_1_1) {
                BinaryTree_1 = BinaryTree_1_1;
            },
            function (TreeTraversal_1_1) {
                TreeTraversal_1 = TreeTraversal_1_1;
            }],
        execute: function() {
            describe("Binary Tree Traversal", function () {
                it("preorder traversal", function () {
                    var tree = new BinaryTree_1.BinaryTree(new BinaryTree_1.Node(50));
                    tree.insert(new BinaryTree_1.Node(40));
                    tree.insert(new BinaryTree_1.Node(30));
                    tree.insert(new BinaryTree_1.Node(60));
                    tree.insert(new BinaryTree_1.Node(70));
                    expect(TreeTraversal_1.TreeTraversal.preOrder(tree.root)).toEqual([50, 40, 30, 60, 70]);
                });
                it("inorder traversal", function () {
                    var tree = new BinaryTree_1.BinaryTree(new BinaryTree_1.Node(50));
                    tree.insert(new BinaryTree_1.Node(40));
                    tree.insert(new BinaryTree_1.Node(30));
                    tree.insert(new BinaryTree_1.Node(60));
                    tree.insert(new BinaryTree_1.Node(70));
                    expect(TreeTraversal_1.TreeTraversal.inOrder(tree.root)).toEqual([30, 40, 50, 60, 70]);
                });
                it("postorder traversal", function () {
                    var tree = new BinaryTree_1.BinaryTree(new BinaryTree_1.Node(50));
                    tree.insert(new BinaryTree_1.Node(40));
                    tree.insert(new BinaryTree_1.Node(30));
                    tree.insert(new BinaryTree_1.Node(60));
                    tree.insert(new BinaryTree_1.Node(70));
                    expect(TreeTraversal_1.TreeTraversal.postOrder(tree.root)).toEqual([30, 40, 70, 60, 50]);
                });
                it("levelorder traversal", function () {
                    var tree = new BinaryTree_1.BinaryTree(new BinaryTree_1.Node(50));
                    tree.insert(new BinaryTree_1.Node(40));
                    tree.insert(new BinaryTree_1.Node(30));
                    tree.insert(new BinaryTree_1.Node(60));
                    tree.insert(new BinaryTree_1.Node(70));
                    var result = [
                        [50],
                        [40, 60],
                        [30, 70]
                    ];
                    expect(TreeTraversal_1.TreeTraversal.levelOrder(tree.root)).toEqual(result);
                });
            });
        }
    }
});
//# sourceMappingURL=TreeTraversalSpec.js.map