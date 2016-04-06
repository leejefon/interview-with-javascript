System.register(['./BinaryTree'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BinaryTree_1;
    return {
        setters:[
            function (BinaryTree_1_1) {
                BinaryTree_1 = BinaryTree_1_1;
            }],
        execute: function() {
            describe("Binary Tree Test", function () {
                it("insert left and right", function () {
                    var tree = new BinaryTree_1.BinaryTree(50);
                    tree.insert(new BinaryTree_1.Child(40));
                    tree.insert(new BinaryTree_1.Child(60));
                    expect(tree.root.left.data).toEqual(40);
                    expect(tree.root.right.data).toEqual(60);
                });
                it("search", function () {
                    var tree = new BinaryTree_1.BinaryTree(50);
                    tree.insert(new BinaryTree_1.Child(40));
                    tree.insert(new BinaryTree_1.Child(30));
                    tree.insert(new BinaryTree_1.Child(70));
                    expect(tree.search(10)).toEqual(null);
                    expect(tree.search(30)).toEqual(30);
                });
                it("preorder traversal", function () {
                    var tree = new BinaryTree_1.BinaryTree(50);
                    tree.insert(new BinaryTree_1.Child(40));
                    tree.insert(new BinaryTree_1.Child(30));
                    tree.insert(new BinaryTree_1.Child(60));
                    tree.insert(new BinaryTree_1.Child(70));
                    expect(tree.traversal('pre')).toEqual([50, 40, 30, 60, 70]);
                });
                it("inorder traversal", function () {
                    var tree = new BinaryTree_1.BinaryTree(50);
                    tree.insert(new BinaryTree_1.Child(40));
                    tree.insert(new BinaryTree_1.Child(30));
                    tree.insert(new BinaryTree_1.Child(60));
                    tree.insert(new BinaryTree_1.Child(70));
                    expect(tree.traversal()).toEqual([30, 40, 50, 60, 70]);
                });
                it("postorder traversal", function () {
                    var tree = new BinaryTree_1.BinaryTree(50);
                    tree.insert(new BinaryTree_1.Child(40));
                    tree.insert(new BinaryTree_1.Child(30));
                    tree.insert(new BinaryTree_1.Child(60));
                    tree.insert(new BinaryTree_1.Child(70));
                    expect(tree.traversal('post')).toEqual([30, 40, 70, 60, 50]);
                });
            });
        }
    }
});
//# sourceMappingURL=BinaryTreeSpec.js.map