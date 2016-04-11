System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TreeTraversal;
    return {
        setters:[],
        execute: function() {
            TreeTraversal = (function () {
                function TreeTraversal() {
                }
                TreeTraversal.preOrder = function (root, dataArr) {
                    if (dataArr === void 0) { dataArr = []; }
                    if (!root)
                        return;
                    dataArr.push(root.data);
                    this.preOrder(root.left, dataArr);
                    this.preOrder(root.right, dataArr);
                    return dataArr;
                };
                TreeTraversal.inOrder = function (root, dataArr) {
                    if (dataArr === void 0) { dataArr = []; }
                    if (!root)
                        return;
                    this.inOrder(root.left, dataArr);
                    dataArr.push(root.data);
                    this.inOrder(root.right, dataArr);
                    return dataArr;
                };
                TreeTraversal.postOrder = function (root, dataArr) {
                    if (dataArr === void 0) { dataArr = []; }
                    if (!root)
                        return;
                    this.postOrder(root.left, dataArr);
                    this.postOrder(root.right, dataArr);
                    dataArr.push(root.data);
                    return dataArr;
                };
                TreeTraversal.levelOrder = function (root, dataArr, level) {
                    if (dataArr === void 0) { dataArr = []; }
                    if (level === void 0) { level = 0; }
                    if (!root)
                        return;
                    if (dataArr[level]) {
                        dataArr[level].push(root.data);
                    }
                    else {
                        dataArr[level] = [root.data];
                    }
                    this.levelOrder(root.left, dataArr, level + 1);
                    this.levelOrder(root.right, dataArr, level + 1);
                    return dataArr;
                };
                return TreeTraversal;
            }());
            exports_1("TreeTraversal", TreeTraversal);
        }
    }
});
//# sourceMappingURL=TreeTraversal.js.map