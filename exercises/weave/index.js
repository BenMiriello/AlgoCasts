// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    let queues = [sourceOne, sourceTwo]
    const queueThree = new Queue
    let current = 0
    while (!!queues[0][0] || !!queues[1][0]) {
        if (queues[current]) {
            queueThree.add(queues[current].remove())
        }
        if (current === 0) {
            current = 1
        } else {
            current = 0
        }
    }
    return queueThree
}

// module.exports = weave;

   const queueOne = new Queue();
   queueOne.add(1);
   queueOne.add(2);
   const queueTwo = new Queue();
   queueTwo.add('Hi');
   queueTwo.add('There');
   const q = weave(queueOne, queueTwo);
   console.log(q.remove()) // 1
   console.log(q.remove()) // 'Hi'
   console.log(q.remove()) // 2
   console.log(q.remove()) // 'There'