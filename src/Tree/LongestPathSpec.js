import { BinaryTree, Node } from './BinaryTree';
import { LongestPath } from './LongestPath';

declare var describe: any, it: any, expect: any;

describe("Longest Path", () => {
  it("should work", () => {
    let tree: BinaryTree = new BinaryTree(new Node(10));

    tree.insert(new Node(5));
    tree.insert(new Node(3));
    tree.insert(new Node(1));
    tree.insert(new Node(7));
    tree.insert(new Node(9));

    expect(LongestPath.exec(tree.root).length).toEqual(5);
  });
});
