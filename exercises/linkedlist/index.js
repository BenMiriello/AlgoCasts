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
        let node = this.head;
        while (node) {
            counter++;
            node = node.next
        }
        return counter
    }

    getFirst(){ return this.head };

    getLast(){
        let node = this.head;
        if (!node) return;
        while (node.next){
            node = node.next
        };
        return node
    };

    clear(){ this.head = null };

    removeFirst(){ this.head = this.head.next };

    removeLast(){
        if (!this.head || !this.head.next) {
            this.head = null;
            return
        };
        if (!this.head.next.next) {
            this.head.next = null;
            return
        }
        let node = this.head;
        while (node.next.next) {
            node = node.next
        }
        node.next = null
    }

    insertLast(data){
        if (!this.head){
            this.head = new Node(data)
        } else {
            this.getLast().next = new Node(data)
        }
    }

    getAt(integer){
        let node = this.head
        for (let i = 0; i < integer; i++) {
            if (!node || !node.next) break
            node = node.next
        }
        return node
    }
};

module.exports = { Node, LinkedList };

