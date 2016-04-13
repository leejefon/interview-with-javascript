System.register(['./GraphColoring'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GraphColoring_1;
    return {
        setters:[
            function (GraphColoring_1_1) {
                GraphColoring_1 = GraphColoring_1_1;
            }],
        execute: function() {
            describe("Graph Coloring", function () {
                it("should work", function () {
                    var graph = [
                        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
                        [1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
                        [0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
                        [0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
                        [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
                        [1, 0, 0, 0, 0, 0, 0, 1, 1, 0],
                        [0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
                        [0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
                        [0, 0, 0, 1, 0, 1, 1, 0, 0, 0],
                        [0, 0, 0, 0, 1, 0, 1, 1, 0, 0]
                    ];
                    var numColors = 3;
                    var result = [1, 2, 1, 2, 3, 2, 1, 3, 3, 2];
                    var gc = new GraphColoring_1.GraphColoring(graph, numColors);
                    expect(gc.solve()).toEqual(result);
                });
            });
        }
    }
});
//# sourceMappingURL=GraphColoringSpec.js.map