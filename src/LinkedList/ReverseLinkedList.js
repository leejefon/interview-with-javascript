import { Node } from './LinkedList';

export class ReverseLinkedList {
  public static exec(head: Node): Node {
    var newHead = null;

    while (head) {
      var next: Node = head.next;
      head.next = newHead;
      newHead = head;
      head = next;
    }

    return newHead;
  }
}
