/**
 * Graph data structure
 * Implement a Graph class.
 * Use a two-dimentaional array to represent a graph
 * @method insertVertex
 * @method insertEdge
 * @method removeEdge
 * @method getNumOfVertexes
 * @method getNumOfEdges
 * @method getValueByIndex
 * @method getWeight
 * @method getMatrix
 * @method print
 * @method getFirstAdjacent
 * @method getNextAdjacent
 * @method searchDFSVertex
 * @method searchDFS
 * @method searchBFSVertex
 * @method searchBFS
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
    this.isVisited = new Array(numberOfVertex).fill(false); // Use an array to record if the vertex is visited
    this.graphArr = [];
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
    if (typeof weight !== "number" || weight <= 0) {
      throw new Error(
        "The value of weight is invalid: it must be a positive number."
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
   * @param {number} startVertexIndex the index of the starting vertex in vertex list
   * @param {number} endVertexIndex the index of the end vertex in vertex list
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
   * Get the matrix that represents the graph
   */
  getMatrix() {
    return this.matrix;
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

  /**
   * Given the index of a vertex, get its adjacent vertex.
   * @param {number} index
   * @returns {number} The index of the adjacent vertex. If not found, return -1;
   */
  getFirstAdjacent(index) {
    for (let k = 0; k < this.vertexList.length; k++) {
      if (this.matrix[index][k] > 0) {
        return k;
      }
    }
    return -1;
  }

  /**
   * Given the index of a vertex(v1), get its adjacent vertex starting from v2
   * @param {number} v1
   * @param {number} v2
   */
  getNextAdjacent(v1, v2) {
    for (let k = v2 + 1; k < this.vertexList.length; k++) {
      if (this.matrix[v1][k] > 0) {
        return k;
      }
    }
    return -1;
  }

  /**
   * DFS searching for a particular vertex at index.
   * @param {number} index
   */
  searchDFSVertex(index) {
    const vertexArr = [];

    // vertexArr.push(this.getValueByIndex(index));
    this.graphArr.push(this.getValueByIndex(index));
    this.isVisited[index] = true;

    let w = this.getFirstAdjacent(index);
    while (w !== -1) {
      if (!this.isVisited[w]) {
        this.searchDFSVertex(w);
      }
      w = this.getNextAdjacent(index, w);
    }
    return vertexArr;
  }

  /**
   * Do DFS searching for a whole graph.
   */
  searchDFS() {
    this.graphArr = []; // Reset graphArr.
    this.isVisited = new Array(this.getNumOfVertexes()).fill(false); // Reset the isVisited array.
    for (let i = 0; i < this.getNumOfVertexes(); i++) {
      if (!this.isVisited[i]) {
        this.searchDFSVertex(i);
      }
    }
    return this.graphArr;
  }

  /**
   * BFS searching for a particular vertex at index.
   * @param {number} index
   */
  searchBFSVertex(index) {
    const queue = []; // A queue to record the sequence of visiting.
    let u;
    let adjacent;
    this.graphArr.push(this.getValueByIndex(index));
    this.isVisited[index] = true;
    queue.push(index);
    while (queue.length > 0) {
      u = queue.shift();
      adjacent = this.getFirstAdjacent(u);
      while (adjacent !== -1) {
        if (!this.isVisited[adjacent]) {
          this.graphArr.push(this.getValueByIndex(adjacent));
          this.isVisited[adjacent] = true;
          queue.push(adjacent);
        }
        adjacent = this.getNextAdjacent(u, adjacent);
      }
    }
    return this.graphArr;
  }

  /** Do BFS searching for a whole graph */
  searchBFS() {
    this.graphArr = [];
    this.isVisited = new Array(this.getNumOfVertexes()).fill(false);
    for (let i = 0; i < this.getNumOfVertexes(); i++) {
      if (!this.isVisited[i]) {
        this.searchBFSVertex(i);
      }
    }
    return this.graphArr;
  }
}

// const graph = new Graph(["a", "b", "c"]);
// graph.insertEdge(0, 1);
// graph.print();
// console.log(graph.matrix);

module.exports = Graph;
