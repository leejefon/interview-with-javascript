import { Node } from './LinkedList';

export class SortList {

    public static exec(head: Node): Node {
        if (!head || !head.next) {
            return head;
        }

        var pointers = this.split(head);

        var leftSide = this.exec(pointers.left);
        var rightSide = this.exec(pointers.right);

        return this.merge(leftSide, rightSide);
    }

    private static split (head: Node): { left: Node, right: Node } {
        var slow: Node;
        var fast: Node;

        var leftList: Node = head;
        var rightList: Node;

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

    private static merge (leftSide, rightSide): Node {
        var newHead: Node;

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
