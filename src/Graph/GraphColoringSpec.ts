import { GraphColoring } from './GraphColoring';

declare var describe: any, it: any, expect: any;

describe("Graph Coloring", () => {
    it("should work", () => {
        var graph = [
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
        var numColors = 3;
        var result = [1, 2, 1, 2, 3, 2, 1, 3, 3, 2];

        var gc = new GraphColoring(graph, numColors);

        expect(gc.solve()).toEqual(result);
    });
});
