// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let totals = [1,0]
  let nodes = [...root.children,'s']

  while (nodes.length > 1) {
    let node = nodes.shift()
    if (node === 's') {
      nodes.push('s')
      totals.push(0)
    } else {
      nodes.push(...node.children)
      totals[totals.length - 1]++
    }
  }

  return totals
}
 
module.exports = levelWidth;

// function levelWidth(root) {
//   let totals = [1,0]
//   let nodes = [...root.children,'s']

//   let node = nodes[0]
//   while (node) {
//     if (node === 's') {
//       if (nodes.length < 2) {
//         return totals
//       }
//       nodes.push(nodes.shift())
//       totals.push(0)
//     } else {
//       nodes.push(...node.children)
//       nodes.shift()
//       totals[totals.length - 1]++
//     }
//     node = nodes[0]
//   }
// }