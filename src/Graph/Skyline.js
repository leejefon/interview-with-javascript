const PriorityQueue = require('../PriorityQueue/PriorityQueue');

class Skyline {
  static exec(buildings) {
    const vertices = [];
    const result = [];

    for (const a of buildings) {
      vertices.push([a[0], -a[2]]);
      vertices.push([a[1], a[2]]);
    }

    vertices.sort((a, b) => {
      if (a[0] !== b[0]) return a[0] - b[0];
      return a[1] - b[1];
    });

    const pq = new PriorityQueue();
    pq.offer(0);
    let prevHeight = 0;
    for (const v of vertices) {
      if (v[1] < 0) pq.offer(-v[1]);
      else pq.remove(v[1]);

      const currHeight = pq.peek();
      if (currHeight !== prevHeight) {
        result.push([v[0], currHeight]);
        prevHeight = currHeight;
      }
    }

    return result;
  }
}

module.exports = Skyline;
