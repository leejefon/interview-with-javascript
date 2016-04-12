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
                    var tree = new BinaryTree_1.BinaryTree(new BinaryTree_1.Node(50));
                    tree.insert(new BinaryTree_1.Node(40));
                    tree.insert(new BinaryTree_1.Node(60));
                    expect(tree.root.left.data).toEqual(40);
                    expect(tree.root.right.data).toEqual(60);
                });
                it("search", function () {
                    var tree = new BinaryTree_1.BinaryTree(new BinaryTree_1.Node(50));
                    tree.insert(new BinaryTree_1.Node(40));
                    tree.insert(new BinaryTree_1.Node(30));
                    tree.insert(new BinaryTree_1.Node(70));
                    expect(tree.search(10)).toEqual(null);
                    expect(tree.search(30)).toEqual(30);
                });
            });
        }
    }
});
//# sourceMappingURL=BinaryTreeSpec.js.map