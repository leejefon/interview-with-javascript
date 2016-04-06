import { BinaryTree, Child } from './BinaryTree';

declare var describe: any, it: any, expect: any;

describe("Binary Tree Test", () => {
    it("insert left and right", () => {
        var tree = new BinaryTree(50);

        tree.insert(new Child(40));
        tree.insert(new Child(60));

        expect(tree.root.left.data).toEqual(40);
        expect(tree.root.right.data).toEqual(60);
    });

    it("search", () => {
        var tree = new BinaryTree(50);

        tree.insert(new Child(40));
        tree.insert(new Child(30));
        tree.insert(new Child(70));

        expect(tree.search(10)).toEqual(null);
        expect(tree.search(30)).toEqual(30);
    })

    it("preorder traversal", () => {
        var tree = new BinaryTree(50);

        tree.insert(new Child(40));
        tree.insert(new Child(30));
        tree.insert(new Child(60));
        tree.insert(new Child(70));

        expect(tree.traversal('pre')).toEqual([50, 40, 30, 60, 70]);
    });

    it("inorder traversal", () => {
        var tree = new BinaryTree(50);

        tree.insert(new Child(40));
        tree.insert(new Child(30));
        tree.insert(new Child(60));
        tree.insert(new Child(70));

        expect(tree.traversal()).toEqual([30, 40, 50, 60, 70]);
    });

    it("postorder traversal", () => {
        var tree = new BinaryTree(50);

        tree.insert(new Child(40));
        tree.insert(new Child(30));
        tree.insert(new Child(60));
        tree.insert(new Child(70));

        expect(tree.traversal('post')).toEqual([30, 40, 70, 60, 50]);
    });
});
