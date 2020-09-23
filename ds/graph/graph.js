/**
 * Graph data structure
 * Implement a Graph class.
 * Use a two-dimentaional array to represent a graph
 */
class Graph {
  /**
   * Constructor - Initialize a graph class
   * @param {array} vertexList - The array of vertex values.
   * @param {boolean} undirected - If the graph is directed, undirected by default.
   */
  constructor(vertexList, undirected = true) {
    if (vertexList) this.numberOfEdges = 0; // How many edges in the graph
    this.vertexList = vertexList; // The list of vertexes in the graph
    this.undirected = undirected; // true - undirected graph, false - directed graph
    const numberOfVertex = this.getNumOfVertexes();
    this.matrix = new Array(numberOfVertex)
      .fill(0)
      .map(() => new Array(numberOfVertex).fill(0));
    // Initialize a two dementaional array and fill it with 0
  }

  /**
   * Add a vertex
   * @param {any} vertexValue - the value of vertex.
   */
  insertVertex(vertexValue) {
    this.vertexList.push(vertexValue);
  }

  /**
   * Add an edge between two vertexes
   * @param {number} startVertexIndex the index of the starting vertex in vertex list
   * @param {number} endVertexIndex the index of the end vertex in vertex list
   * @param {number} weight the weight of the edge, set 1 by default
   */
  insertEdge(startVertexIndex, endVertexIndex, weight = 1) {
    if (typeof weight !== "number" || weight === 0) {
      throw new Error(
        "The value of weight is invalid: it must be a non-zero number."
      );
    }
    if (this.matrix[startVertexIndex][endVertexIndex] === 0) {
      this.matrix[startVertexIndex][endVertexIndex] = weight;
      if (this.undirected) {
        this.matrix[endVertexIndex][startVertexIndex] = weight;
      }
      this.numberOfEdges++;
    }
  }

  /**
   * Remove an edge between two vertexes
   * @param {*} startVertexIndex the index of the starting vertex in vertex list
   * @param {*} endVertexIndex the index of the end vertex in vertex list
   */
  removeEdge(startVertexIndex, endVertexIndex) {
    if (this.matrix[startVertexIndex][endVertexIndex] !== 0) {
      this.matrix[startVertexIndex][endVertexIndex] = 0;
      if (this.undirected) {
        this.matrix[endVertexIndex][startVertexIndex] = 0;
      }
      this.numberOfEdges--;
    }
  }

  /**
   * Get the number of vertexes of the graph
   */
  getNumOfVertexes() {
    return this.vertexList.length;
  }

  /**
   * Get the number of edges
   */
  getNumOfEdges() {
    return this.numberOfEdges;
  }

  /**
   * Get the value of the vertex based on its index
   * @param {number} index
   */
  getValueByIndex(index) {
    return this.vertexList[index];
  }

  /**
   * Get the weight of the edge from one vertex to another
   * @param {number} startingVertexIndex
   * @param {number} endVertexIndex
   */
  getWeight(startingVertexIndex, endVertexIndex) {
    return this.matrix[startingVertexIndex][endVertexIndex];
  }

  /**
   * Print the graph on console
   */
  print() {
    let maxLength = this.vertexList[0].length;
    const printVertexList = [];
    for (let vertex of this.vertexList) {
      const valueLength = vertex.toString().length;
      if (valueLength > maxLength) {
        maxLength = valueLength;
      }
    }
    for (let vertex of this.vertexList) {
      let diffLength = maxLength - vertex.toString().length;
      if (diffLength === 0) {
        printVertexList.push(vertex);
      } else {
        while (diffLength > 0) {
          vertex = " " + vertex;
          diffLength--;
        }
        printVertexList.push(vertex);
      }
    }
    for (let i = 0; i <= this.matrix.length - 1; i++) {
      if (i === 0) {
        let blank = "";
        let diffLength = maxLength;
        while (diffLength > 0) {
          blank += " ";
          diffLength--;
        }
        console.log(blank + "\t" + this.vertexList.join("\t"));
      }
      const row = this.matrix[i];
      const printRow = [printVertexList[i], ...row];
      console.log(printRow.join("\t"));
    }
  }
}

// const graph = new Graph(["a", "b", "c"]);
// graph.insertEdge(0, 1);
// graph.print();
// console.log(graph.matrix);

module.exports = Graph;
