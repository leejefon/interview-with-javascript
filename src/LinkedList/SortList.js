const Node = require('./LinkedList').Node;

class SortList {
  static sort(head) {
    if (!head || !head.next) {
      return head;
    }

    const pointers = this.split(head);

    const leftSide = this.sort(pointers.left);
    const rightSide = this.sort(pointers.right);

    return this.merge(leftSide, rightSide);
  }

  static split (head) {
    let slow;
    let fast;

    const leftList = head;
    let rightList;

    if (!head || !head.next) {
      rightList = null;
    } else {
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
  }

  static merge (leftSide, rightSide) {
    let newHead;

    if (!leftSide) return rightSide;
    if (!rightSide) return leftSide;

    if (leftSide.data < rightSide.data) {
      newHead = new Node(leftSide.data);
      newHead.next = this.merge(leftSide.next, rightSide);
    } else {
      newHead = new Node(rightSide.data);
      newHead.next = this.merge(leftSide, rightSide.next);
    }

    return newHead;
  }
}

module.exports = SortList;
