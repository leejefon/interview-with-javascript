System.register(['./LinkedList'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LinkedList_1;
    return {
        setters:[
            function (LinkedList_1_1) {
                LinkedList_1 = LinkedList_1_1;
            }],
        execute: function() {
            describe("Linked List Test", function () {
                it("should work", function () {
                    var list = new LinkedList_1.List(10);
                    list.append(new LinkedList_1.Node(20));
                    list.append(new LinkedList_1.Node(30));
                    expect(list.head.data).toEqual(10);
                    expect(list.head.next.data).toEqual(20);
                    expect(list.head.next.next.data).toEqual(30);
                });
            });
        }
    }
});
//# sourceMappingURL=LinkedListSpec.js.map