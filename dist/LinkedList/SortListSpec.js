System.register(['./LinkedList', './SortList'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LinkedList_1, SortList_1;
    return {
        setters:[
            function (LinkedList_1_1) {
                LinkedList_1 = LinkedList_1_1;
            },
            function (SortList_1_1) {
                SortList_1 = SortList_1_1;
            }],
        execute: function() {
            describe("Sort List", function () {
                it("should work", function () {
                    var list = new LinkedList_1.List(20);
                    list.append(new LinkedList_1.Node(40));
                    list.append(new LinkedList_1.Node(30));
                    list.append(new LinkedList_1.Node(60));
                    list.append(new LinkedList_1.Node(10));
                    list.append(new LinkedList_1.Node(50));
                    list.head = SortList_1.SortList.sort(list.head);
                    expect(list.head.data).toEqual(10);
                    expect(list.head.next.data).toEqual(20);
                    expect(list.head.next.next.data).toEqual(30);
                    expect(list.head.next.next.next.data).toEqual(40);
                    expect(list.head.next.next.next.next.data).toEqual(50);
                    expect(list.head.next.next.next.next.next.data).toEqual(60);
                });
            });
        }
    }
});
//# sourceMappingURL=SortListSpec.js.map