import { Child } from './BinaryTree';

export class LongestPath {

    static exec(root: Child) {
        if (!root) {
            return {
                length: 0,
                height: 0
            };
        }

        var leftTree = this.exec(root.left);
        var rightTree = this.exec(root.right);

        return {
            length: Math.max(leftTree.height + rightTree.height + 1, leftTree.length, rightTree.length),
            height: Math.max(leftTree.height, rightTree.height) + 1
        };
    }
}
