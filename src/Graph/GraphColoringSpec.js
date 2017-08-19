import { GraphColoring } from './GraphColoring';

describe("Graph Coloring", () => {
  it("should work", () => {
    let graph: number[][] = [
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
      [1, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
      [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 1, 0, 0, 1, 0, 0, 0, 1],
      [0, 0, 0, 1, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 0, 1, 1, 0, 0]
    ];
    let numColors: number = 3;
    let result: number[] = [1, 2, 1, 2, 3, 2, 1, 3, 3, 2];

    let gc: GraphColoring = new GraphColoring(graph, numColors);

    expect(gc.solve()).toEqual(result);
  });
});
