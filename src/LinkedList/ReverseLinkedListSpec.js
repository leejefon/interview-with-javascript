import { List, Node } from './LinkedList';
import { ReverseLinkedList } from './ReverseLinkedList';

declare var describe: any, it: any, expect: any;

describe("Reverse linked list", () => {
    it("should work", () => {
        let list: List = new List(10);

        list.append(new Node(20));
        list.append(new Node(30));
        list.append(new Node(40));
        list.append(new Node(50));
        list.append(new Node(60));

        expect(ReverseLinkedList.exec(list.head).toArray()).toEqual([60, 50, 40, 30, 20, 10]);
    });
});
