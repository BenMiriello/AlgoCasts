// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let greater = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = greater
      }
    }
  }
  return arr
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexofMin = i
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[indexofMin]) {
        indexofMin = j
      }
    }
    if (indexofMin !== i) {
      let lower = arr[indexofMin]
      arr[indexofMin] = arr[i]
      arr[i] = lower
    }
  }
  return arr
}

function mergeSort(arr) {
  if (arr.length > 1) {
    return merge(mergeSort(arr.splice(0, arr.length / 2)), mergeSort(arr))
  } else return arr
}

function merge(left, right) {
  const results = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }
  return [...results, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

