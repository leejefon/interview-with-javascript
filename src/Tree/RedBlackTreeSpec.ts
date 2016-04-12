import { RedBlackTree, RedBlackNode, Color } from './RedBlackTree';

declare var describe: any, it: any, expect: any;

describe("Red Black Tree Test", () => {
    it("recolring test - (self, parent, uncle) all red", () => {
        var tree = new RedBlackTree(new RedBlackNode(50));

        tree.insert(new RedBlackNode(40));
        tree.insert(new RedBlackNode(60));
        tree.insert(new RedBlackNode(70));

        expect((<RedBlackNode> tree.root).color).toEqual(Color.BLACK);
        expect((<RedBlackNode> tree.root.left).color).toEqual(Color.BLACK);
        expect((<RedBlackNode> tree.root.right).color).toEqual(Color.BLACK);
        expect((<RedBlackNode> tree.root.right.right).color).toEqual(Color.RED);
    });
});
