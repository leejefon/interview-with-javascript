System.register(['../PriorityQueue/PriorityQueue'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PriorityQueue_1;
    var Skyline;
    return {
        setters:[
            function (PriorityQueue_1_1) {
                PriorityQueue_1 = PriorityQueue_1_1;
            }],
        execute: function() {
            Skyline = (function () {
                function Skyline() {
                }
                Skyline.exec = function (buildings) {
                    var vertices = [];
                    var result = [];
                    for (var _i = 0, buildings_1 = buildings; _i < buildings_1.length; _i++) {
                        var a = buildings_1[_i];
                        vertices.push([a[0], -a[2]]);
                        vertices.push([a[1], a[2]]);
                    }
                    vertices.sort(function (a, b) {
                        if (a[0] !== b[0])
                            return a[0] - b[0];
                        return a[1] - b[1];
                    });
                    var pq = new PriorityQueue_1.PriorityQueue();
                    pq.offer(0);
                    var prevHeight = 0;
                    for (var _a = 0, vertices_1 = vertices; _a < vertices_1.length; _a++) {
                        var v = vertices_1[_a];
                        if (v[1] < 0)
                            pq.offer(-v[1]);
                        else
                            pq.remove(v[1]);
                        var currHeight = pq.peek();
                        if (currHeight !== prevHeight) {
                            result.push([v[0], currHeight]);
                            prevHeight = currHeight;
                        }
                    }
                    return result;
                };
                return Skyline;
            }());
            exports_1("Skyline", Skyline);
        }
    }
});
//# sourceMappingURL=Skyline.js.map