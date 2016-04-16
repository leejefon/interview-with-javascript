
export class Node {

    data: any;
    next: Node;

    public constructor(data?) {
        this.data = data;
    }

    public printNode(): void {
        console.log(this.data);
    }
}

export class List {
    head: Node;

    public constructor(initData) {
        this.head = new Node(initData);
    }

    public append(node: Node): void {
        this.appendHelper(this.head, node);
    }

    private appendHelper(head: Node, node: Node): void {
        if (head.next) this.appendHelper(head.next, node);
        else head.next = node;
    }

    public printList(): void {
        var temp: Node = this.head;

        while (temp) {
            temp.printNode();
            temp = temp.next;
        }
    }
}
