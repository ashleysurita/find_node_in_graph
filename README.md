# find_node_in_graph

https://www.algoexpert.io/questions/Depth-first%20Search
```
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
  }
}

exports.Node = Node;
```
