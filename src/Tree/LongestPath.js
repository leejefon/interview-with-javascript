import { Node } from './BinaryTree';

export class LongestPath {
  static exec(root) {
    if (!root) {
      return {
        length: 0,
        height: 0
      };
    }

    const leftTree = this.exec(root.left);
    const rightTree = this.exec(root.right);

    return {
      length: Math.max(leftTree.height + rightTree.height + 1, leftTree.length, rightTree.length),
      height: Math.max(leftTree.height, rightTree.height) + 1
    };
  }
}
