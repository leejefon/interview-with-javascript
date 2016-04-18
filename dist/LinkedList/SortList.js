System.register(['./LinkedList'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LinkedList_1;
    var SortList;
    return {
        setters:[
            function (LinkedList_1_1) {
                LinkedList_1 = LinkedList_1_1;
            }],
        execute: function() {
            SortList = (function () {
                function SortList() {
                }
                SortList.sort = function (head) {
                    if (!head || !head.next) {
                        return head;
                    }
                    var pointers = this.split(head);
                    var leftSide = this.sort(pointers.left);
                    var rightSide = this.sort(pointers.right);
                    return this.merge(leftSide, rightSide);
                };
                SortList.split = function (head) {
                    var slow;
                    var fast;
                    var leftList = head;
                    var rightList;
                    if (!head || !head.next) {
                        rightList = null;
                    }
                    else {
                        slow = head;
                        fast = head.next;
                        while (fast) {
                            fast = fast.next;
                            if (fast) {
                                slow = slow.next;
                                fast = fast.next;
                            }
                        }
                        rightList = slow.next;
                        delete slow.next;
                    }
                    return {
                        left: leftList,
                        right: rightList
                    };
                };
                SortList.merge = function (leftSide, rightSide) {
                    var newHead;
                    if (!leftSide)
                        return rightSide;
                    if (!rightSide)
                        return leftSide;
                    if (leftSide.data < rightSide.data) {
                        newHead = new LinkedList_1.Node(leftSide.data);
                        newHead.next = this.merge(leftSide.next, rightSide);
                    }
                    else {
                        newHead = new LinkedList_1.Node(rightSide.data);
                        newHead.next = this.merge(leftSide, rightSide.next);
                    }
                    return newHead;
                };
                return SortList;
            }());
            exports_1("SortList", SortList);
        }
    }
});
//# sourceMappingURL=SortList.js.map