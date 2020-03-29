// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor(){
        this.stackA = new Stack
        this.reverseStack = new Stack
    }

    add(data) {
        this.stackA.push(data)
    }

    remove() {
        this._flip()
        let popped = this.reverseStack.pop()
        this._unFlip()
        return popped
    }

    peek() {
        this._flip()
        let peeked = this.reverseStack.peek()
        this._unFlip()
        return peeked
    }

    _flip(){
        while (this.stackA.peek()) {
            this.reverseStack.push(this.stackA.pop())
        }
    }

    _unFlip(){
        while (this.reverseStack.peek()) {
            this.stackA.push(this.reverseStack.pop())
        }
    }
}

module.exports = Queue;
