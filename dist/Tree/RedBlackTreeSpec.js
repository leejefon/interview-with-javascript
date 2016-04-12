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
                it("recolring test - (self, parent, uncle) all red", function () {
                    var tree = new RedBlackTree_1.RedBlackTree(new RedBlackTree_1.RedBlackNode(50));
                    tree.insert(new RedBlackTree_1.RedBlackNode(40));
                    tree.insert(new RedBlackTree_1.RedBlackNode(60));
                    tree.insert(new RedBlackTree_1.RedBlackNode(70));
                    expect(tree.root.color).toEqual(RedBlackTree_1.Color.BLACK);
                    expect(tree.root.left.color).toEqual(RedBlackTree_1.Color.BLACK);
                    expect(tree.root.right.color).toEqual(RedBlackTree_1.Color.BLACK);
                    expect(tree.root.right.right.color).toEqual(RedBlackTree_1.Color.RED);
                });
            });
        }
    }
});
//# sourceMappingURL=RedBlackTreeSpec.js.map