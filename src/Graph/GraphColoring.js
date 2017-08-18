export class GraphColoring {  
  graph: number[][];
  colors: number[];
  numColors: number;

  public constructor(graph: number[][], numColors: number) {
    this.graph = graph;
    this.numColors = numColors;
    this.colors = Array(graph.length).fill(-1);
  }

  public solve(v: number = 0): number[] {
    if (v === this.graph.length) return this.colors;

    for (var color = 1; color <= this.numColors; color++) {
      if (this.checkNeighbours(v, color)) {
        this.colors[v] = color;
        return this.solve(v + 1);
      }
    }
  }

  public checkNeighbours(v: number, color: number): boolean {
    for (var i = 0; i < this.graph[v].length; i++) {
      if (this.graph[v][i] === 1 && this.colors[i] === color) {
        return false;
      }
    }

    return true;
  }
}
