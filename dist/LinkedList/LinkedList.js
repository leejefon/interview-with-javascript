System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Node, List;
    return {
        setters:[],
        execute: function() {
            Node = (function () {
                function Node(data) {
                    this.data = data;
                }
                Node.prototype.printNode = function () {
                    console.log(this.data);
                };
                Node.prototype.toArray = function (head) {
                    var result = [];
                    if (!head) {
                        head = this;
                    }
                    result.push(head.data);
                    if (head.next) {
                        result = result.concat(this.toArray(head.next));
                    }
                    return result;
                };
                return Node;
            }());
            exports_1("Node", Node);
            List = (function () {
                function List(initData) {
                    this.head = new Node(initData);
                }
                List.prototype.append = function (node) {
                    this.appendHelper(this.head, node);
                };
                List.prototype.appendHelper = function (head, node) {
                    if (head.next)
                        this.appendHelper(head.next, node);
                    else
                        head.next = node;
                };
                List.prototype.printList = function () {
                    var temp = this.head;
                    while (temp) {
                        temp.printNode();
                        temp = temp.next;
                    }
                };
                return List;
            }());
            exports_1("List", List);
        }
    }
});
//# sourceMappingURL=LinkedList.js.map