const Graph = require("../../graph/graph");

describe("Test Graph", () => {
  let undirectedGraph, directedGraph;
  // Test a undirectional graph and a directional graph.
  beforeEach(() => {
    undirectedGraph = new Graph(["a", "b", "c", "d", "e"], true);
    undirectedGraph.insertEdge(0, 1);
    undirectedGraph.insertEdge(1, 3);
    undirectedGraph.insertEdge(2, 3);
    undirectedGraph.insertEdge(2, 4);
    undirectedGraph.insertEdge(0, 4);

    directedGraph = new Graph(["a", "b", "c", "d", "e"], false);
    directedGraph.insertEdge(0, 1);
    directedGraph.insertEdge(1, 3);
    directedGraph.insertEdge(2, 3);
    directedGraph.insertEdge(2, 4);
    directedGraph.insertEdge(0, 4);
    directedGraph.insertEdge(4, 0);
  });
  afterEach(() => {
    undirectedGraph = null;
    directedGraph = null;
  });

  it("Graph has constructor", () => {
    expect(typeof Graph.prototype.constructor).toEqual("function");
  });

  it("should get correct number of vertexes", () => {
    expect(directedGraph.getNumOfVertexes()).toBe(5);
    expect(undirectedGraph.getNumOfVertexes()).toBe(5);
  });

  it("should get correct number of edges", () => {
    expect(undirectedGraph.getNumOfEdges()).toBe(5);
    expect(directedGraph.getNumOfEdges()).toBe(6);
  });

  it("insert vertex should work", () => {
    directedGraph.insertVertex("f");
    undirectedGraph.insertVertex("f");
    expect(directedGraph.getNumOfVertexes()).toBe(6);
    expect(undirectedGraph.getNumOfVertexes()).toBe(6);
  });

  it("should get value by index", () => {
    expect(undirectedGraph.getValueByIndex(0)).toBe("a");
    expect(undirectedGraph.getValueByIndex(1)).toBe("b");
    expect(undirectedGraph.getValueByIndex(2)).toBe("c");
    expect(undirectedGraph.getValueByIndex(3)).toBe("d");
    expect(undirectedGraph.getValueByIndex(4)).toBe("e");

    expect(directedGraph.getValueByIndex(0)).toBe("a");
    expect(directedGraph.getValueByIndex(1)).toBe("b");
    expect(directedGraph.getValueByIndex(2)).toBe("c");
    expect(directedGraph.getValueByIndex(3)).toBe("d");
    expect(directedGraph.getValueByIndex(4)).toBe("e");
  });

  it("insert edge should work correctly", () => {
    undirectedGraph.insertEdge(1, 2);
    expect(undirectedGraph.getNumOfEdges()).toBe(6);
    directedGraph.insertEdge(4, 2);
    expect(directedGraph.getNumOfEdges()).toBe(7);
  });

  it("remove edge should work correctly", () => {
    undirectedGraph.removeEdge(0, 1);
    expect(undirectedGraph.getNumOfEdges()).toBe(4);
    directedGraph.removeEdge(0, 1);
    expect(directedGraph.getNumOfEdges()).toBe(5);
  });

  it("should get correct matrix that represents the graph", () => {
    // console.log(undirectedGraph.getMatrix());
    // console.log(directedGraph.getMatrix());
    expect(undirectedGraph.getMatrix()).toEqual([
      [0, 1, 0, 0, 1],
      [1, 0, 0, 1, 0],
      [0, 0, 0, 1, 1],
      [0, 1, 1, 0, 0],
      [1, 0, 1, 0, 0],
    ]);
    expect(directedGraph.getMatrix()).toEqual([
      [0, 1, 0, 0, 1],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0],
    ]);
  });

  it("should return the first adjacent of a vertex", () => {
    expect(undirectedGraph.getFirstAdjacent(0)).toBe(1);
    expect(undirectedGraph.getFirstAdjacent(1)).toBe(0);
    expect(undirectedGraph.getFirstAdjacent(2)).toBe(3);
    expect(undirectedGraph.getFirstAdjacent(3)).toBe(1);
    expect(undirectedGraph.getFirstAdjacent(4)).toBe(0);

    expect(directedGraph.getFirstAdjacent(0)).toBe(1);
    expect(directedGraph.getFirstAdjacent(1)).toBe(3);
    expect(directedGraph.getFirstAdjacent(2)).toBe(3);
    expect(directedGraph.getFirstAdjacent(3)).toBe(-1);
    expect(directedGraph.getFirstAdjacent(4)).toBe(0);
  });

  it("should return the next adjacent of a vertex", () => {
    expect(undirectedGraph.getNextAdjacent(2, 3)).toBe(4);
    expect(undirectedGraph.getNextAdjacent(3, 1)).toBe(2);
    expect(undirectedGraph.getNextAdjacent(4, 0)).toBe(2);

    expect(directedGraph.getNextAdjacent(2, 3)).toBe(4);
    expect(directedGraph.getNextAdjacent(3, 1)).toBe(-1);
    expect(directedGraph.getNextAdjacent(4, 0)).toBe(-1);
  });

  it("DFS search should work correctly", () => {
    expect(undirectedGraph.searchDFS()).toEqual(["a", "b", "d", "c", "e"]);
    expect(directedGraph.searchDFS()).toEqual(["a", "b", "d", "e", "c"]);
  });

  it("BFS search should work correctly", () => {
    expect(undirectedGraph.searchBFS()).toEqual(["a", "b", "e", "d", "c"]);
    expect(directedGraph.searchBFS()).toEqual(["a", "b", "e", "d", "c"]);
  });
});
