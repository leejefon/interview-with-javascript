System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PriorityQueue;
    return {
        setters:[],
        execute: function() {
            PriorityQueue = (function () {
                function PriorityQueue(collection, comparator) {
                    var _this = this;
                    if (typeof collection === 'function') {
                        this.comparator = collection;
                        collection = [];
                    }
                    else {
                        this.comparator = comparator || (function (a, b) { return a - b; });
                    }
                    this.queue = [];
                    if (Array.isArray(collection)) {
                        collection.forEach(function (item) {
                            _this.add(item);
                        });
                    }
                }
                PriorityQueue.prototype.add = function (item) {
                    if (this.offer(item))
                        return true;
                    else
                        throw new Error('Queue is full');
                };
                PriorityQueue.prototype.offer = function (item) {
                    for (var i = 0; i < this.queue.length; i++) {
                        if (this.comparator(item, this.queue[i]) > 0) {
                            var temp = this.queue[i];
                            this.queue[i] = item;
                            item = temp;
                        }
                    }
                    this.queue.push(item);
                    return true;
                };
                PriorityQueue.prototype.poll = function () {
                    var item = this.queue.shift();
                    return item;
                };
                PriorityQueue.prototype.peek = function () {
                    return this.queue[0];
                };
                PriorityQueue.prototype.contains = function (item) {
                    this.queue.forEach(function (queueItem) {
                        if (item === queueItem)
                            return true;
                    });
                    return false;
                };
                PriorityQueue.prototype.size = function () {
                    return this.queue.length;
                };
                PriorityQueue.prototype.isEmpty = function () {
                    return this.queue.length === 0 ? true : false;
                };
                PriorityQueue.prototype.remove = function (item) {
                    this.queue = this.queue.filter(function (queueItem) {
                        return queueItem !== item;
                    });
                };
                PriorityQueue.prototype.clear = function () {
                    this.queue = [];
                };
                PriorityQueue.prototype.toArray = function () {
                    return this.queue;
                };
                return PriorityQueue;
            }());
            exports_1("PriorityQueue", PriorityQueue);
        }
    }
});
//# sourceMappingURL=PriorityQueue.js.map