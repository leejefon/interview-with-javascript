export class Node {
  data: any;
  next: Node;

  public constructor(data?) {
    this.data = data;
  }

  public printNode(): void {
    console.log(this.data);
  }

  public toArray(head?: Node): any[] {
    var result: any[] = [];

    if (!head) {
      head = this;
    }

    result.push(head.data);

    if (head.next) {
      result = result.concat(this.toArray(head.next));
    }

    return result;
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
