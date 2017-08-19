import { Node } from './LinkedList';

export class ReverseLinkedList {
  static exec(head) {
    var newHead = null;

    while (head) {
      const next = head.next;
      head.next = newHead;
      newHead = head;
      head = next;
    }

    return newHead;
  }
}
