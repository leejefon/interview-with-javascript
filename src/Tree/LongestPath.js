import { Node } from './BinaryTree';

export class LongestPath {
  public static exec(root: Node): { length: number, height: number } {
    if (!root) {
      return {
        length: 0,
        height: 0
      };
    }

    var leftTree: { length: number, height: number } = this.exec(root.left);
    var rightTree: { length: number, height: number } = this.exec(root.right);

    return {
      length: Math.max(leftTree.height + rightTree.height + 1, leftTree.length, rightTree.length),
      height: Math.max(leftTree.height, rightTree.height) + 1
    };
  }
}
