import { PriorityQueue } from './PriorityQueue';

declare var describe: any, it: any, expect: any;

describe("Priority Queue", () => {
  it("default priority", () => {
    let pq = new PriorityQueue();

    pq.add(3);
    pq.add(2);
    pq.add(1);

    expect(pq.toArray()).toEqual([3, 2, 1]);
  });

  it("custom comparator", () => {
    let pq = new PriorityQueue((a, b) => b - a);

    pq.add(3);
    pq.add(2);
    pq.add(1);

    expect(pq.toArray()).toEqual([1, 2, 3]);
  });
});
