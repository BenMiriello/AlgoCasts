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
    constructor(){ this.head = null }

    insertFirst(data){ this.head = new Node(data, this.head) }

    size(){
        let number = 0;
        if (this.head === null) return number
        number++
        let currentNode = this.head;
        while (currentNode.next != null) {
            number++
            currentNode = currentNode.next
        }
        return number
    }
}

l = new LinkedList
l.insertFirst(1)
console.log(l.head.data)

module.exports = { Node, LinkedList };

