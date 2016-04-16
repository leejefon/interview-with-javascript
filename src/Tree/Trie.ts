import { HashTable } from '../HashTable/HashTable';

export class TrieNode {
    char: string;
    children: HashTable;
    isEndOfWord: boolean;

    public constructor(char?: string) {
        if (char) this.char = char;
        this.children = new HashTable(26);
        this.isEndOfWord = false;
    }
}

export class Trie {
    root: TrieNode;

    public constructor() {
        this.root = new TrieNode();
    }

    public insert(str: string): void {
        this.insertHelper(this.root, str);
    }

    private insertHelper(root: TrieNode, str: string): void {
        if (str.length === 0) {
            root.isEndOfWord = true;
            return;
        }

        var char: string = str.charAt(0);
        var children: HashTable = root.children;
        var node = children.get(char.charCodeAt(0));

        if (!node) {
            node = new TrieNode(char);
            children.put(char.charCodeAt(0), node);
        }
        return this.insertHelper(node, str.substring(1));
    }

    public search(str: string): boolean {
        var currRoot = this.root;

        for (var i = 0; i < str.length; i++) {
            var node = currRoot.children.get(str.charCodeAt(i));
            if (node) {
                currRoot = node;
            } else {
                return false;
            }
        }

        if (currRoot.isEndOfWord) return true;
        else return false;
    }
}
