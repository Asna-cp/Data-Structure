class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.adj = new Map();
  }

  addVertex(v) {
    this.adj.set(v, []);
  }

  addEdges(v, e) {
    this.adj.get(v).push(e);

  }

  printGraph() {
    let keys = this.adj.keys();
    for (let i of keys) {
      let getValues = this.adj.get(i);
      let edge = "";

      for (let j of getValues) {
        edge += j + " ";
      }

      console.log(i + "-->" + edge);
    }
  }

}

const g = new Graph(6);

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");

g.addEdges("A", "B");
g.addEdges("C", "D");
g.addEdges("A", "D");
g.addEdges("B", "D");

g.printGraph()

