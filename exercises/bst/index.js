// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data = null){
    this.data = data;
    this.left = null;
    this.right = null;
  }

  contains(data){
    console.log(data)
    let node = this;
    let i = 0
    while (node != null) {
      if (node.data === data) return node
      if (node.data > data) {
        node = node.left
      } else if (node.data < data) {
        node = node.right
      }
    }
    return null
  }

  insert(data){
    if (this.data > data) {
      if (this.left){
        this.left.insert(data)
      } else {
        this.left = new Node(data)
      }
    }
    if (this.data < data) {
      if (this.right){
        this.right.insert(data)
      } else {
        this.right = new Node(data)
      }
    }
  }
}

module.exports = Node;
