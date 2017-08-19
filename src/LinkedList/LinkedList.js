export class Node {
  constructor(data) {
    this.data = data;
  }

  printNode() {
    console.log(this.data);
  }

  toArray(head) {
    var result = [];

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
  constructor(initData) {
    this.head = new Node(initData);
  }

  append(node) {
    this.appendHelper(this.head, node);
  }

  appendHelper(head, node) {
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
