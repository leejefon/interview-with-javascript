System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LongestPath;
    return {
        setters:[],
        execute: function() {
            LongestPath = (function () {
                function LongestPath() {
                }
                LongestPath.exec = function (root) {
                    if (!root) {
                        return {
                            length: 0,
                            height: 0
                        };
                    }
                    var leftTree = this.exec(root.left);
                    var rightTree = this.exec(root.right);
                    return {
                        length: Math.max(leftTree.height + rightTree.height + 1, leftTree.length, rightTree.length),
                        height: Math.max(leftTree.height, rightTree.height) + 1
                    };
                };
                return LongestPath;
            }());
            exports_1("LongestPath", LongestPath);
        }
    }
});
//# sourceMappingURL=LongestPath.js.map