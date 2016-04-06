

export class Node {

    data: any;
    next: Node;

    constructor(data?) {
        this.data = data;
    }

    printNode() {
        console.log(this.data);
    }
}

export class List {
    head: Node;

    constructor(initData) {
        this.head = new Node(initData);
    }

    append(node: Node) {
        this.appendHelper(this.head, node);
    }

    private appendHelper(head: Node, node: Node) {
        if (head.next) this.appendHelper(head.next, node);
        else head.next = node;
    }

    printList() {
        var temp = this.head;

        while (temp) {
            temp.printNode();
            temp = temp.next;
        }
    }
}
