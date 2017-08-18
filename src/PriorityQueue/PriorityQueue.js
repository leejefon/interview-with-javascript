export class PriorityQueue {
  queue: any[];
  comparator: any;

  public constructor(collection?: any, comparator?: any) {
    if (typeof collection === 'function') {
      this.comparator = collection;
      collection = [];
    } else {
      this.comparator = comparator || ((a, b) => a - b);
    }

    this.queue = [];
    if (Array.isArray(collection)) {
      collection.forEach(item => {
        this.add(item);
      });
    }
  }

  public add(item: any): boolean {
    if (this.offer(item)) return true;
    else throw new Error('Queue is full');
  }

  public offer(item: any): boolean {
    for (var i = 0; i < this.queue.length; i++) {
      if (this.comparator(item, this.queue[i]) > 0) {
        var temp = this.queue[i];
        this.queue[i] = item;
        item = temp;
      }
    }
    this.queue.push(item);

    return true
  }

  public poll(): any {
    var item = this.queue.shift();
    return item;
  }

  public peek(): any {
    return this.queue[0];
  }

  public contains(item: any): boolean {
    this.queue.forEach(queueItem => {
      if (item === queueItem) return true;
    });
    return false;
  }

  public size(): number {
    return this.queue.length;
  }

  public isEmpty(): boolean {
    return this.queue.length === 0 ? true : false;
  }

  public remove(item: any): void {
    this.queue = this.queue.filter(queueItem => {
      return queueItem !== item;
    });
  }

  public clear(): void {
    this.queue = [];
  }

  public toArray(): any[] {
    return this.queue;
  }
}
