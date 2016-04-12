System.register(['./RedBlackTree'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RedBlackTree_1;
    return {
        setters:[
            function (RedBlackTree_1_1) {
                RedBlackTree_1 = RedBlackTree_1_1;
            }],
        execute: function() {
            describe("Red Black Tree Test", function () {
                it("recolring test: (self, parent, uncle) all red", function () {
                    var tree = new RedBlackTree_1.RedBlackTree(new RedBlackTree_1.RedBlackNode(50));
                    tree.insert(new RedBlackTree_1.RedBlackNode(40));
                    tree.insert(new RedBlackTree_1.RedBlackNode(60));
                    tree.insert(new RedBlackTree_1.RedBlackNode(70));
                    expect(tree.root.color).toEqual(RedBlackTree_1.Color.BLACK);
                    expect(tree.root.left.color).toEqual(RedBlackTree_1.Color.BLACK);
                    expect(tree.root.right.color).toEqual(RedBlackTree_1.Color.BLACK);
                    expect(tree.root.right.right.color).toEqual(RedBlackTree_1.Color.RED);
                });
                it("reconstruct test: right -> right", function () {
                    var tree = new RedBlackTree_1.RedBlackTree(new RedBlackTree_1.RedBlackNode(50));
                    tree.insert(new RedBlackTree_1.RedBlackNode(40));
                    tree.insert(new RedBlackTree_1.RedBlackNode(60));
                    tree.insert(new RedBlackTree_1.RedBlackNode(70));
                    tree.insert(new RedBlackTree_1.RedBlackNode(80));
                    expect(tree.root.color).toEqual(RedBlackTree_1.Color.BLACK);
                    expect(tree.root.left.color).toEqual(RedBlackTree_1.Color.BLACK);
                    expect(tree.root.right.data).toEqual(70);
                    expect(tree.root.right.color).toEqual(RedBlackTree_1.Color.BLACK);
                    expect(tree.root.right.left.data).toEqual(60);
                    expect(tree.root.right.left.color).toEqual(RedBlackTree_1.Color.RED);
                    expect(tree.root.right.right.data).toEqual(80);
                    expect(tree.root.right.right.color).toEqual(RedBlackTree_1.Color.RED);
                });
                it("reconstruct test: right -> left", function () {
                    var tree = new RedBlackTree_1.RedBlackTree(new RedBlackTree_1.RedBlackNode(50));
                    tree.insert(new RedBlackTree_1.RedBlackNode(40));
                    tree.insert(new RedBlackTree_1.RedBlackNode(60));
                    tree.insert(new RedBlackTree_1.RedBlackNode(80));
                    tree.insert(new RedBlackTree_1.RedBlackNode(70));
                    expect(tree.root.color).toEqual(RedBlackTree_1.Color.BLACK);
                    expect(tree.root.left.color).toEqual(RedBlackTree_1.Color.BLACK);
                    expect(tree.root.right.data).toEqual(70);
                    expect(tree.root.right.color).toEqual(RedBlackTree_1.Color.BLACK);
                    expect(tree.root.right.left.data).toEqual(60);
                    expect(tree.root.right.left.color).toEqual(RedBlackTree_1.Color.RED);
                    expect(tree.root.right.right.data).toEqual(80);
                    expect(tree.root.right.right.color).toEqual(RedBlackTree_1.Color.RED);
                });
                it("reconstruct test: left -> right", function () {
                    var tree = new RedBlackTree_1.RedBlackTree(new RedBlackTree_1.RedBlackNode(50));
                    tree.insert(new RedBlackTree_1.RedBlackNode(40));
                    tree.insert(new RedBlackTree_1.RedBlackNode(60));
                    tree.insert(new RedBlackTree_1.RedBlackNode(20));
                    tree.insert(new RedBlackTree_1.RedBlackNode(30));
                    expect(tree.root.color).toEqual(RedBlackTree_1.Color.BLACK);
                    expect(tree.root.right.color).toEqual(RedBlackTree_1.Color.BLACK);
                    expect(tree.root.left.data).toEqual(30);
                    expect(tree.root.left.color).toEqual(RedBlackTree_1.Color.BLACK);
                    expect(tree.root.left.left.data).toEqual(20);
                    expect(tree.root.left.left.color).toEqual(RedBlackTree_1.Color.RED);
                    expect(tree.root.left.right.data).toEqual(40);
                    expect(tree.root.left.right.color).toEqual(RedBlackTree_1.Color.RED);
                });
                it("reconstruct test: left -> left", function () {
                    var tree = new RedBlackTree_1.RedBlackTree(new RedBlackTree_1.RedBlackNode(50));
                    tree.insert(new RedBlackTree_1.RedBlackNode(40));
                    tree.insert(new RedBlackTree_1.RedBlackNode(60));
                    tree.insert(new RedBlackTree_1.RedBlackNode(30));
                    tree.insert(new RedBlackTree_1.RedBlackNode(20));
                    expect(tree.root.color).toEqual(RedBlackTree_1.Color.BLACK);
                    expect(tree.root.right.color).toEqual(RedBlackTree_1.Color.BLACK);
                    expect(tree.root.left.data).toEqual(30);
                    expect(tree.root.left.color).toEqual(RedBlackTree_1.Color.BLACK);
                    expect(tree.root.left.left.data).toEqual(20);
                    expect(tree.root.left.left.color).toEqual(RedBlackTree_1.Color.RED);
                    expect(tree.root.left.right.data).toEqual(40);
                    expect(tree.root.left.right.color).toEqual(RedBlackTree_1.Color.RED);
                });
            });
        }
    }
});
//# sourceMappingURL=RedBlackTreeSpec.js.map