// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.

function matrix(n) {

    const fillMatrices = (
        spiral, // the matrix
        total = n * n, // grand total of cells
        count = n + 1, // count of grand total
        coords = [n - 1,1], // [position in nested array, index of array in matrix]
        direction = 1, // key: 0->right 1->down 2->left 3->up
        isRun2 = false, // function will do 2 runs of equal length before decrementing run length. This keeps track.
        runCounter = 0, // keeps track of how far along we are in a since run
        runLength = n - 2 // how many times to add a number while going in a given direction before changing directions
        ) => {

        spiral[coords[1]][coords[0]] = count; // add to spiral output array

        if (count === total) { // either end or increment
            return spiral;
        } else count++ ;
    
        if (runCounter === runLength) { // if need to change directions, evaluate and reset run values
            
            if (isRun2) runLength --; // length of a run changes every 2 runs (except for first which only goes once, covered in a special case at initialization, below)

            isRun2 = !isRun2;
            runCounter = 0;
    
            direction = direction === 3 ? 0 : direction + 1 // set next direction
    
        } else runCounter++; // otherwise just increment run counter
    
        // // set next coords
        if (direction === 0) coords[0] ++;
        else if (direction === 1) coords[1] ++;
        else if (direction === 2) coords[0] --;
        else if (direction === 3) coords[1] --;
    
        return fillMatrices(spiral, total, count, coords, direction, isRun2, runCounter, runLength);
    };
    
    let spiral = []; // initialize matrix
    for (let i = 0; i < n; i++) {
        spiral[i] = [];
    };

    for (let j = 0; j < n; j++) { // fill first array
        spiral[0][j] = j + 1;
    };

    return fillMatrices(spiral);
};

matrix(1000)

// module.exports = matrix;


// function matrix(n) {

//     const results = [];

//     for (let i = 0; i < n; i++) {
//         results.push([]);
//     };

//     let counter = 1;
//     let startColumn = 0;
//     let endColumn = n - 1;
//     let startRow = 0;
//     let endRow = n - 1;
    
//     while (startColumn <= endColumn && startRow <= endRow) {
//         // Top row
//         for (let i = startColumn; i <= endColumn; i++) {
//             results[startRow][i] = counter;
//             counter ++;
//         }
//         startRow++;
        
//         // Right column
//         for (let i = startRow; i <= endRow; i++) {
//             results[i][endColumn] = counter;
//             counter++;
//         };
//         endColumn--;

//         // Bottom row
//         for (let i = endColumn; i >= startColumn; i--) {
//             results[endRow][i] = counter;
//             counter++;
//         };
//         endRow--;

//         // Start column
//         for (let i = endRow; i>= startRow; i--) {
//             results[i][startColumn] = counter;
//             counter++;
//         };
//         startColumn++;

//     };
//     return results
// };





// function matrix(n) {

//     const fillMatrices = (outer, count = n + 1, coords = [n - 1,1], dir = [1, false, 0, n - 2], total = n * n) => {

//         // console.log(n, ' IN: (count:',count, ',coords:', coords, 'dir:', dir,  '): ', outer)

//         // note: direction run refers how many times we'll add a number while going in the same direction before changing directions
    
//         // count is for 1 - n, iterating through whole thing
    
//         // coords is [x,y] or [position in array, index of array in outer]
    
//         // dir[0] is direction (0->right 1->down 2->left 3->up)
//         // dir[1] is either true or false (true-> do another run through at current length before changing directions, false->length of direction run decrements at end of run)
//         // dir[2] is how long this direction has been counting for (0 idxed)
//         // dir[3] is how long this direction will count for (0 idxed)
    
//         // ADD TO OUTPUT ARRAY
//         outer[coords[1]][coords[0]] = count

//         // end or increment
//         if (count === total) {

//             return outer
//         } else count++ ;
    
//         // WORK OUT DIRECTIONS FOR NEXT RECURSION
    
//         // when we need to change directions, evaluate
//         if (dir[2] === dir[3]) {
            
//             // decrement direction run length if it's the end of the second run for that direction
//             if (dir[1]) { 
//                 dir[3] -- 
//             };
            
//             // toggle bool that keeps track of when to decrement run length
//             dir[1] = !dir[1] ;
    
//             // reset direction run counter
//             dir[2] = 0 ;
    
//             // set next direction
//             if (dir[0] === 3) {
//                 dir[0] = 0
//             } else {
//                 dir[0] ++
//             };
    
//             // otherwise just increment run counter
//         } else {
//             dir[2]++
//         };

//         // console.log('dir[0]:', dir[0])
    
//         // // set next coords
//         if (dir[0] === 0) coords[0] ++
//         if (dir[0] === 1) coords[1] ++
//         if (dir[0] === 2) coords[0] --
//         if (dir[0] === 3) coords[1] --

//         // console.log(n, 'OUT: (count:',count, ',coords:', coords, 'dir:', dir,  '): ', outer)
    
//         return fillMatrices(outer, count, coords, dir, total)
//     };
    
//     let outer = [];
//     for (let x = 0; x < n; x++) {
//         outer[x] = [];
//         for (let y = 0; y < n; y++) {
//             outer[x].push(0)
//         };
//     };

//     // fill first array
//     for (let i = 0; i < n; i++) {
//         outer[0][i] = i + 1
//     }

//     return fillMatrices(outer)

// };






// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]