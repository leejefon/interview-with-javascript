export class PriorityQueue {
  constructor(collection, comparator) {
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

  add(item) {
    if (this.offer(item)) return true;
    else throw new Error('Queue is full');
  }

  offer(item) {
    for (let i = 0; i < this.queue.length; i++) {
      if (this.comparator(item, this.queue[i]) > 0) {
        var temp = this.queue[i];
        this.queue[i] = item;
        item = temp;
      }
    }
    this.queue.push(item);

    return true
  }

  poll() {
    var item = this.queue.shift();
    return item;
  }

  peek() {
    return this.queue[0];
  }

  contains(item) {
    this.queue.forEach(queueItem => {
      if (item === queueItem) return true;
    });
    return false;
  }

  size(): number {
    return this.queue.length;
  }

  isEmpty() {
    return this.queue.length === 0 ? true : false;
  }

  remove(item) {
    this.queue = this.queue.filter(queueItem => {
      return queueItem !== item;
    });
  }

  clear() {
    this.queue = [];
  }

  toArray()[] {
    return this.queue;
  }
}
