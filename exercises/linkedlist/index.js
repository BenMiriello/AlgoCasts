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

    getAt(index){
        let node = this.head
        let counter = 0
        while (node) {
            if (counter === index) return node;
            counter ++;
            node = node.next
        }
        return null;
    }

    removeAt(index){
        if (index < 0 || !this.head) return
        if (index === 0) {
            this.head = this.head.next || null
            return
        }
        let before = this.getAt(index - 1)
        if (before && before.next){
            before.next = before.next.next
        }
    }

    insertAt(data, index){
        if (index === 0) {
            this.insertFirst(data)
            return
        }
        let before = this.getAt(index - 1)
        if (before && before.next){
            before.next = new Node(data, before.next || null)
        } else {
            this.insertLast(data)
        }
    }

    // forEach(fn){
    //     let node = this.head
    //     if (!node) return
    //     while (node){
    //         node.data = fn(node).data
    //         node = node.next
    //     }
    // }
    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
          fn(node, counter);
          node = node.next;
          counter++;
        }
      }
};

module.exports = { Node, LinkedList };
