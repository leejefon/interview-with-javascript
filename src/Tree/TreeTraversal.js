import { Node } from './BinaryTree';

export class TreeTraversal {
  static preOrder(root, dataArr = []) {
    if (!root) return;

    dataArr.push(root.data);
    this.preOrder(root.left, dataArr);
    this.preOrder(root.right, dataArr);

    return dataArr;
  }

  static inOrder(root, dataArr = []) {
    if (!root) return;

    this.inOrder(root.left, dataArr);
    dataArr.push(root.data);
    this.inOrder(root.right, dataArr);

    return dataArr;
  }

  static postOrder(root, dataArr = []) {
    if (!root) return;

    this.postOrder(root.left, dataArr);
    this.postOrder(root.right, dataArr);
    dataArr.push(root.data);

    return dataArr;
  }

  static levelOrder(root, dataArr = [], level = 0) {
    if (!root) return;

    if (dataArr[level]) {
      dataArr[level].push(root.data);
    } else {
      dataArr[level] = [root.data];
    }

    this.levelOrder(root.left, dataArr, level + 1);
    this.levelOrder(root.right, dataArr, level + 1);

    return dataArr;
  }
}
