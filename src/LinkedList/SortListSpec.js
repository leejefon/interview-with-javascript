import { List, Node } from './LinkedList';
import { SortList } from './SortList';

describe("Sort List", () => {
  it("should work", () => {
    let list: List = new List(20);

    list.append(new Node(40));
    list.append(new Node(30));
    list.append(new Node(60));
    list.append(new Node(10));
    list.append(new Node(50));

    list.head = SortList.sort(list.head);

    expect(list.head.data).toEqual(10);
    expect(list.head.next.data).toEqual(20);
    expect(list.head.next.next.data).toEqual(30);
    expect(list.head.next.next.next.data).toEqual(40);
    expect(list.head.next.next.next.next.data).toEqual(50);
    expect(list.head.next.next.next.next.next.data).toEqual(60);
  });
});
