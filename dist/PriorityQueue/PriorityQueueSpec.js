System.register(['./PriorityQueue'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PriorityQueue_1;
    return {
        setters:[
            function (PriorityQueue_1_1) {
                PriorityQueue_1 = PriorityQueue_1_1;
            }],
        execute: function() {
            describe("Priority Queue", function () {
                it("default priority", function () {
                    var pq = new PriorityQueue_1.PriorityQueue();
                    pq.add(3);
                    pq.add(2);
                    pq.add(1);
                    expect(pq.toArray()).toEqual([3, 2, 1]);
                });
                it("custom comparator", function () {
                    var pq = new PriorityQueue_1.PriorityQueue(function (a, b) { return b - a; });
                    pq.add(3);
                    pq.add(2);
                    pq.add(1);
                    expect(pq.toArray()).toEqual([1, 2, 3]);
                });
            });
        }
    }
});
//# sourceMappingURL=PriorityQueueSpec.js.map