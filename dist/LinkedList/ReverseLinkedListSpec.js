System.register(['./LinkedList', './ReverseLinkedList'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LinkedList_1, ReverseLinkedList_1;
    return {
        setters:[
            function (LinkedList_1_1) {
                LinkedList_1 = LinkedList_1_1;
            },
            function (ReverseLinkedList_1_1) {
                ReverseLinkedList_1 = ReverseLinkedList_1_1;
            }],
        execute: function() {
            describe("Reverse linked list", function () {
                it("should work", function () {
                    var list = new LinkedList_1.List(10);
                    list.append(new LinkedList_1.Node(20));
                    list.append(new LinkedList_1.Node(30));
                    list.append(new LinkedList_1.Node(40));
                    list.append(new LinkedList_1.Node(50));
                    list.append(new LinkedList_1.Node(60));
                    expect(ReverseLinkedList_1.ReverseLinkedList.exec(list.head).toArray()).toEqual([60, 50, 40, 30, 20, 10]);
                });
            });
        }
    }
});
//# sourceMappingURL=ReverseLinkedListSpec.js.map