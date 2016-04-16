import { BinaryTree, Node } from './BinaryTree';
import { TreeTraversal } from './TreeTraversal';

declare var describe: any, it: any, expect: any;

describe("Binary Tree Traversal", () => {
    it("preorder traversal", () => {
        let tree: BinaryTree = new BinaryTree(new Node(50));

        tree.insert(new Node(40));
        tree.insert(new Node(30));
        tree.insert(new Node(60));
        tree.insert(new Node(70));

        expect(TreeTraversal.preOrder(tree.root)).toEqual([50, 40, 30, 60, 70]);
    });

    it("inorder traversal", () => {
        let tree: BinaryTree = new BinaryTree(new Node(50));

        tree.insert(new Node(40));
        tree.insert(new Node(30));
        tree.insert(new Node(60));
        tree.insert(new Node(70));

        expect(TreeTraversal.inOrder(tree.root)).toEqual([30, 40, 50, 60, 70]);
    });

    it("postorder traversal", () => {
        let tree: BinaryTree = new BinaryTree(new Node(50));

        tree.insert(new Node(40));
        tree.insert(new Node(30));
        tree.insert(new Node(60));
        tree.insert(new Node(70));

        expect(TreeTraversal.postOrder(tree.root)).toEqual([30, 40, 70, 60, 50]);
    });

    it("levelorder traversal", () => {
        let tree: BinaryTree = new BinaryTree(new Node(50));

        tree.insert(new Node(40));
        tree.insert(new Node(30));
        tree.insert(new Node(60));
        tree.insert(new Node(70));

        let result: number[][] = [
            [50],
            [40, 60],
            [30, 70]
        ];

        expect(TreeTraversal.levelOrder(tree.root)).toEqual(result);
    });
});
