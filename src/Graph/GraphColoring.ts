
export class GraphColoring {

    graph: number[][];
    colors: number[];
    numColors: number;

    constructor(graph, numColors) {
        this.graph = graph;
        this.numColors = numColors;
        this.colors = Array(graph.length).fill(-1);
    }

    solve(v: number = 0) {
        if (v === this.graph.length) return this.colors;

        for (var color = 1; color <= this.numColors; color++) {
            if (this.checkNeighbours(v, color)) {
                this.colors[v] = color;
                return this.solve(v + 1);
            }
        }
    }

    checkNeighbours(v: number, color: number) {
        for (var i = 0; i < this.graph[v].length; i++) {
            if (this.graph[v][i] === 1 && this.colors[i] === color) {
                return false;
            }
        }

        return true;
    }
}
