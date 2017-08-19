import { List, Node } from './LinkedList';

describe("Linked List Test", () => {
  it("should work", () => {
    let list: List = new List(10);

    list.append(new Node(20));
    list.append(new Node(30));

    expect(list.head.data).toEqual(10);
    expect(list.head.next.data).toEqual(20);
    expect(list.head.next.next.data).toEqual(30);
  });
});
