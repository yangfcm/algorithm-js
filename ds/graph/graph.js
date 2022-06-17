/**
 * @name Graph
 * @description Implement a Graph class and its commonly-used methods.
 * Use a two-dimentaional N*N array to represent a graph.
 * The values in the array indicate the route(weight) between the two nodes.
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
   * @name Constructor
   * @description Initialize a graph class
   * @param {array} vertexList - The array of vertex values.
   * @param {boolean} undirected - If the graph is directed, undirected by default.
   * @returns {undefined}
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
   * @name insertVertex
   * @description Add a vertex
   * @param {any} vertexValue - the value of vertex.
   * @returns {undefined}
   */
  insertVertex(vertexValue) {
    this.vertexList.push(vertexValue);
  }

  /**
   * @name insertEdge
   * @description Add an edge between two vertexes. Consider the graph is directed or undirected.
   * @param {number} startVertexIndex the index of the starting vertex in vertex list
   * @param {number} endVertexIndex the index of the end vertex in vertex list
   * @param {number} weight the weight of the edge, set 1 by default
   * @returns {undefined}
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
   * @name removeEdge
   * @description Remove an edge between two vertexes. Consider the graph is directed or undirected.
   * @param {number} startVertexIndex the index of the starting vertex in vertex list
   * @param {number} endVertexIndex the index of the end vertex in vertex list
   * @returns {undefined}
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
   * @name getNumOfVertexes
   * @description Get the number of vertexes of the graph
   * @returns {number}
   */
  getNumOfVertexes() {
    return this.vertexList.length;
  }

  /**
   * @name getNumOfEdges
   * @description Get the number of edges
   * @returns {number}
   */
  getNumOfEdges() {
    return this.numberOfEdges;
  }

  /**
   * @name getValueByIndex
   * @description Get the value of the vertex based on its index
   * @param {number} index
   * @returns {any}
   */
  getValueByIndex(index) {
    return this.vertexList[index];
  }

  /**
   * @name getWeight
   * @description Get the weight of the edge from one vertex to another
   * @param {number} startingVertexIndex
   * @param {number} endVertexIndex
   * @returns {number}
   */
  getWeight(startingVertexIndex, endVertexIndex) {
    return this.matrix[startingVertexIndex][endVertexIndex];
  }

  /**
   * @name getMatrix
   * @description Get the matrix that represents the graph
   * @returns {array[][]}
   */
  getMatrix() {
    return this.matrix;
  }

  /**
   * @name print
   * @description Print the graph on console
   * @returns {undefined}
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
   * @name getFirstAdjacent
   * @description Given the index of a vertex, get its adjacent vertex.
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
   * @name getNextAdjacent
   * @description Given the index of a vertex(v1), get its adjacent vertex starting from v2
   * @param {number} v1
   * @param {number} v2
   * @returns {number}
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
   * @name searchDFSVertex
   * @description DFS searching for a particular vertex at index.
   * @param {number} index
   * @returns {array}
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
   * @name searchDFS
   * @description Do DFS searching for a whole graph.
   * @returns {array}
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
   * @name searchBFSVertex
   * @description BFS searching for a particular vertex at index.
   * @param {number} index
   * @returns {array}
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

  /**
   * @name searchBFS
   * @description Do BFS searching for a whole graph
   * @returns {array}
   */
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

module.exports = Graph;
