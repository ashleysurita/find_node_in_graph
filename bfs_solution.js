class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
		let res = []
    let queue = [this]
		while(queue.length){
			let curr = queue.shift()
			curr.children.forEach(child => queue.push(child))
			res.push(curr.name)
		}
		return res
  }
	
}
