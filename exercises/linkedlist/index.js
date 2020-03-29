// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = {data: null, next: null}
    }

    insertFirst(node){
        this.head.data = node
    }
}

l = new LinkedList
l.insertFirst(1)
console.log(l.head.data)

module.exports = { Node, LinkedList };

