import { BinaryTree, Child } from './BinaryTree';
import { TreeTraversal } from './TreeTraversal';

declare var describe: any, it: any, expect: any;

describe("Binary Tree Traversal", () => {
    it("preorder traversal", () => {
        var tree = new BinaryTree(50);

        tree.insert(new Child(40));
        tree.insert(new Child(30));
        tree.insert(new Child(60));
        tree.insert(new Child(70));

        expect(TreeTraversal.preOrder(tree.root)).toEqual([50, 40, 30, 60, 70]);
    });

    it("inorder traversal", () => {
        var tree = new BinaryTree(50);

        tree.insert(new Child(40));
        tree.insert(new Child(30));
        tree.insert(new Child(60));
        tree.insert(new Child(70));

        expect(TreeTraversal.inOrder(tree.root)).toEqual([30, 40, 50, 60, 70]);
    });

    it("postorder traversal", () => {
        var tree = new BinaryTree(50);

        tree.insert(new Child(40));
        tree.insert(new Child(30));
        tree.insert(new Child(60));
        tree.insert(new Child(70));

        expect(TreeTraversal.postOrder(tree.root)).toEqual([30, 40, 70, 60, 50]);
    });

    it("levelorder traversal", () => {
        var tree = new BinaryTree(50);

        tree.insert(new Child(40));
        tree.insert(new Child(30));
        tree.insert(new Child(60));
        tree.insert(new Child(70));

        var result = [
            [50],
            [40, 60],
            [30, 70]
        ];

        expect(TreeTraversal.levelOrder(tree.root)).toEqual(result);
    });
});