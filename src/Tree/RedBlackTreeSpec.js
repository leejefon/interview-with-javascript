import { RedBlackTree, RedBlackNode, Color } from './RedBlackTree';

declare var describe: any, it: any, expect: any;

describe("Red Black Tree Test", () => {
  it("recolring test: (self, parent, uncle) all red", () => {
    let tree: RedBlackTree = new RedBlackTree(new RedBlackNode(50));

    tree.insert(new RedBlackNode(40));
    tree.insert(new RedBlackNode(60));
    tree.insert(new RedBlackNode(70));

    expect((<RedBlackNode> tree.root).color).toEqual(Color.BLACK);
    expect((<RedBlackNode> tree.root.left).color).toEqual(Color.BLACK);
    expect((<RedBlackNode> tree.root.right).color).toEqual(Color.BLACK);
    expect((<RedBlackNode> tree.root.right.right).color).toEqual(Color.RED);
  });

  it("reconstruct test: right -> right", () => {
    let tree: RedBlackTree = new RedBlackTree(new RedBlackNode(50));

    tree.insert(new RedBlackNode(40));
    tree.insert(new RedBlackNode(60));
    tree.insert(new RedBlackNode(70));
    tree.insert(new RedBlackNode(80));

    expect((<RedBlackNode> tree.root).color).toEqual(Color.BLACK); // 50
    expect((<RedBlackNode> tree.root.left).color).toEqual(Color.BLACK); // 40

    expect((<RedBlackNode> tree.root.right).data).toEqual(70);
    expect((<RedBlackNode> tree.root.right).color).toEqual(Color.BLACK);

    expect((<RedBlackNode> tree.root.right.left).data).toEqual(60);
    expect((<RedBlackNode> tree.root.right.left).color).toEqual(Color.RED);

    expect((<RedBlackNode> tree.root.right.right).data).toEqual(80);
    expect((<RedBlackNode> tree.root.right.right).color).toEqual(Color.RED);
  });

  it("reconstruct test: right -> left", () => {
    let tree: RedBlackTree = new RedBlackTree(new RedBlackNode(50));

    tree.insert(new RedBlackNode(40));
    tree.insert(new RedBlackNode(60));
    tree.insert(new RedBlackNode(80));
    tree.insert(new RedBlackNode(70));

    expect((<RedBlackNode> tree.root).color).toEqual(Color.BLACK); // 50
    expect((<RedBlackNode> tree.root.left).color).toEqual(Color.BLACK); // 40

    expect((<RedBlackNode> tree.root.right).data).toEqual(70);
    expect((<RedBlackNode> tree.root.right).color).toEqual(Color.BLACK);

    expect((<RedBlackNode> tree.root.right.left).data).toEqual(60);
    expect((<RedBlackNode> tree.root.right.left).color).toEqual(Color.RED);

    expect((<RedBlackNode> tree.root.right.right).data).toEqual(80);
    expect((<RedBlackNode> tree.root.right.right).color).toEqual(Color.RED);
  });

  it("reconstruct test: left -> right", () => {
    let tree: RedBlackTree = new RedBlackTree(new RedBlackNode(50));

    tree.insert(new RedBlackNode(40));
    tree.insert(new RedBlackNode(60));
    tree.insert(new RedBlackNode(20));
    tree.insert(new RedBlackNode(30));

    expect((<RedBlackNode> tree.root).color).toEqual(Color.BLACK); // 50
    expect((<RedBlackNode> tree.root.right).color).toEqual(Color.BLACK); // 60

    expect((<RedBlackNode> tree.root.left).data).toEqual(30);
    expect((<RedBlackNode> tree.root.left).color).toEqual(Color.BLACK);

    expect((<RedBlackNode> tree.root.left.left).data).toEqual(20);
    expect((<RedBlackNode> tree.root.left.left).color).toEqual(Color.RED);

    expect((<RedBlackNode> tree.root.left.right).data).toEqual(40);
    expect((<RedBlackNode> tree.root.left.right).color).toEqual(Color.RED);
  });

  it("reconstruct test: left -> left", () => {
    let tree: RedBlackTree = new RedBlackTree(new RedBlackNode(50));

    tree.insert(new RedBlackNode(40));
    tree.insert(new RedBlackNode(60));
    tree.insert(new RedBlackNode(30));
    tree.insert(new RedBlackNode(20));

    expect((<RedBlackNode> tree.root).color).toEqual(Color.BLACK); // 50
    expect((<RedBlackNode> tree.root.right).color).toEqual(Color.BLACK); // 60

    expect((<RedBlackNode> tree.root.left).data).toEqual(30);
    expect((<RedBlackNode> tree.root.left).color).toEqual(Color.BLACK);

    expect((<RedBlackNode> tree.root.left.left).data).toEqual(20);
    expect((<RedBlackNode> tree.root.left.left).color).toEqual(Color.RED);

    expect((<RedBlackNode> tree.root.left.right).data).toEqual(40);
    expect((<RedBlackNode> tree.root.left.right).color).toEqual(Color.RED);
  });
});
