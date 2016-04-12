import { BinaryTree, Node } from './BinaryTree';

export class Color {
    public static RED: string = 'RED';
    public static BLACK: string = 'BLACK';
}

export class RedBlackNode extends Node {
    color: string;

    constructor(initData) {
        super(initData);
        this.color = Color.BLACK;
    }

    print() {
        console.log(this.data + ' ' + this.color);
    }
}

export class RedBlackTree extends BinaryTree {

    constructor(root: RedBlackNode) {
        super(root);
    }

    insert(node: RedBlackNode) {
        node.color = Color.RED;
        super.insert(node);
        this.adjustTree(node);
    }

    private adjustTree(node: RedBlackNode) {
        var parent: RedBlackNode = <RedBlackNode> node.getParent(this.root);
        var uncle: RedBlackNode = <RedBlackNode> node.getUncle(this.root);
        var grandParent: RedBlackNode = parent ? <RedBlackNode> parent.getParent(this.root) : null;

        if (node &&
            JSON.stringify(node) !== JSON.stringify(this.root) &&
            parent.color === Color.RED
        ) {
            // Recolor
            if (uncle.color === Color.RED) {
                parent.color = Color.BLACK;
                uncle.color = Color.BLACK;
                grandParent.color = Color.RED;
                this.adjustTree(grandParent);
            }
        }

        (<RedBlackNode> this.root).color = Color.BLACK;
    }

    private rotateRight() {

    }

    private rotateLeft() {

    }
}
