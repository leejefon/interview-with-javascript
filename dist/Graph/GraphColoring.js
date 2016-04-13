System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GraphColoring;
    return {
        setters:[],
        execute: function() {
            GraphColoring = (function () {
                function GraphColoring(graph, numColors) {
                    this.graph = graph;
                    this.numColors = numColors;
                    this.colors = Array(graph.length).fill(-1);
                }
                GraphColoring.prototype.solve = function (v) {
                    if (v === void 0) { v = 0; }
                    if (v === this.graph.length)
                        return this.colors;
                    for (var color = 1; color <= this.numColors; color++) {
                        if (this.checkNeighbours(v, color)) {
                            this.colors[v] = color;
                            return this.solve(v + 1);
                        }
                    }
                };
                GraphColoring.prototype.checkNeighbours = function (v, color) {
                    for (var i = 0; i < this.graph[v].length; i++) {
                        if (this.graph[v][i] === 1 && this.colors[i] === color) {
                            return false;
                        }
                    }
                    return true;
                };
                return GraphColoring;
            }());
            exports_1("GraphColoring", GraphColoring);
        }
    }
});
//# sourceMappingURL=GraphColoring.js.map