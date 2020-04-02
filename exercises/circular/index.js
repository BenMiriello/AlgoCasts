// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    let node = list.head;
    let log = []
    while (node) {
        for (let i = 0; i < log.length; i++) {
            if (node.next === log[i]){
                return true
            }
        }
        node = node.next;
        log.push(node)
    }
    return false
}

module.exports = circular;

