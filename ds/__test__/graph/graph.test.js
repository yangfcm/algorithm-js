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
});
