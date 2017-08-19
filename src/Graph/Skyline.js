import { PriorityQueue } from '../PriorityQueue/PriorityQueue';

export class Skyline {
  static exec(buildings) {
    var vertices = [];
    var result = [];

    for (const a of buildings) {
      vertices.push([a[0], -a[2]]);
      vertices.push([a[1], a[2]]);
    }

    vertices.sort((a, b) => {
      if (a[0] !== b[0]) return a[0] - b[0];
      return a[1] - b[1];
    });

    var pq = new PriorityQueue();
    pq.offer(0);
    var prevHeight = 0;
    for (var v of vertices) {
      if (v[1] < 0) pq.offer(-v[1]);
      else pq.remove(v[1]);

      var currHeight = pq.peek();
      if (currHeight !== prevHeight) {
        result.push([v[0], currHeight]);
        prevHeight = currHeight;
      }
    }

    return result;
  }
}
