// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.data = []
    };

    add(record) {
        this.data.unshift(record)
    }

    remove() {
        return this.data.pop()
    }

}

// module.exports = Queue;

let q = new Queue
console.log('\n\n\n\n\n\n')
console.log('Queue is a class with a constructor: ', typeof Queue.prototype.constructor === 'function')
console.log('can add elements to a queue: ', !!q.add(1))
console.log('can remove elements from a queue', !!q.remove())
q.add(1);
q.add(2);
q.add(3);
console.log('Order of elements is maintained', 
    q.remove() === 1 &&
    q.remove() === 2 &&
    q.remove() === 3
)


// class Queue {
//     constructor(){ this.arr = [] }
//     add = (n) => this.arr.push(n)
//     remove = () => this.arr.shift()
// }