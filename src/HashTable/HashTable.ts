
export class HashEntry {
    key: number;
    value: any;

    public constructor(key: number, value: any) {
        this.key = key;
        this.value = value;
    }

    public getKey(): number {
        return this.key;
    }

    public getValue(): any {
        return this.value;
    }
}

export class HashTable {
    private TABLE_SIZE: number;;

    table: HashEntry[];

    public constructor(table_size: number = 128) {
        this.TABLE_SIZE = table_size;
        this.table = new Array(this.TABLE_SIZE).fill(null);
    }

    public get(key: number): any {
        var hash: number = key % this.TABLE_SIZE;
        var originalHash: number = hash;

        while (this.table[hash] && this.table[hash].getKey() !== key) {
            hash = (hash + 1) % this.TABLE_SIZE;
            if (hash === originalHash) {
                hash = -1;
                break;
            }
        }

        if (hash === -1 || !this.table[hash]) {
            return null;
        } else {
            return this.table[hash].getValue();
        }
    }

    public put(key: number, value: any): void {
        var hash: number = key % this.TABLE_SIZE;
        var originalHash: number = hash;

        while (this.table[hash] && this.table[hash].getKey() !== key) {
            hash = (hash + 1) % this.TABLE_SIZE;
            if (hash === originalHash) {
                hash = -1;
                break;
            }
        }

        if (hash === -1) {
            throw new Error('Table is full');
        } else {
            this.table[hash] = new HashEntry(key, value);
        }
    }
}
