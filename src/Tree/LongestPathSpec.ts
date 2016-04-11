import { BinaryTree, Child } from './BinaryTree';
import { LongestPath } from './LongestPath';

declare var describe: any, it: any, expect: any;

describe("Longest Path", () => {
    it("should work", () => {
        var tree: BinaryTree = new BinaryTree(10);

        tree.insert(new Child(5));
        tree.insert(new Child(3));
        tree.insert(new Child(1));
        tree.insert(new Child(7));
        tree.insert(new Child(9));

        expect(LongestPath.exec(tree.root).length).toEqual(5);
    });
});
