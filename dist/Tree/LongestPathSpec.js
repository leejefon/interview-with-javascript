System.register(['./BinaryTree', './LongestPath'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BinaryTree_1, LongestPath_1;
    return {
        setters:[
            function (BinaryTree_1_1) {
                BinaryTree_1 = BinaryTree_1_1;
            },
            function (LongestPath_1_1) {
                LongestPath_1 = LongestPath_1_1;
            }],
        execute: function() {
            describe("Longest Path", function () {
                it("should work", function () {
                    var tree = new BinaryTree_1.BinaryTree(new BinaryTree_1.Node(10));
                    tree.insert(new BinaryTree_1.Node(5));
                    tree.insert(new BinaryTree_1.Node(3));
                    tree.insert(new BinaryTree_1.Node(1));
                    tree.insert(new BinaryTree_1.Node(7));
                    tree.insert(new BinaryTree_1.Node(9));
                    expect(LongestPath_1.LongestPath.exec(tree.root).length).toEqual(5);
                });
            });
        }
    }
});
//# sourceMappingURL=LongestPathSpec.js.map