// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next
    }
};

class LinkedList {
    constructor(){ this.head = null }

    insertFirst(data){ this.head = new Node(data, this.head) }

    size(){
        let counter = 0;
        let currentNode = this.head;
        while (currentNode) {
            counter++;
            currentNode = currentNode.next
        }
        return counter
    }

    getFirst(){
        return this.head
    };

    getLast(){
        let last = this.head;
        if (last === null) return last
        while (last.next){
            last = last.next
        }
        return last
    }
};

module.exports = { Node, LinkedList };

