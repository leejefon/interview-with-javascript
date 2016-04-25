System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ReverseLinkedList;
    return {
        setters:[],
        execute: function() {
            ReverseLinkedList = (function () {
                function ReverseLinkedList() {
                }
                ReverseLinkedList.exec = function (head) {
                    var newHead = null;
                    while (head) {
                        var next = head.next;
                        head.next = newHead;
                        newHead = head;
                        head = next;
                    }
                    return newHead;
                };
                return ReverseLinkedList;
            }());
            exports_1("ReverseLinkedList", ReverseLinkedList);
        }
    }
});
//# sourceMappingURL=ReverseLinkedList.js.map