// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
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

function matrix(n) {
    let outer = [];
    for (let x = 0; x < n; x++) {
        outer[x] = [];
        for (let y = 0; y < n; y++) {
            outer[x].push(0)
        };
    };

    // fill first array
    for (let i = 0; i < n; i++) {
        outer[0][i] = i + 1
    }

    // note: direction run refers how many times we'll add a number while going in the same direction before changing directions

    // count is for 1 - n, iterating through whole thing

    // coords is [x,y] or [position in array, index of array in outer]

    // dir[0] is direction (0->right 1->down 2->left 3->up)
    // dir[1] is either true or false (true-> do another run through at current length before changing directions, false->length of direction run decrements at end of run)
    // dir[2] is how long this direction has been counting for (0 idxed)
    // dir[3] is how long this direction will count for (0 idxed)

    const fillMatrices = (outer, count = 1, coords = [0,0], dir = [1, false, 0, n - 2]) => {

        // ADD TO OUTPUT ARRAY
        outer[coords[1]][coords[0]] = count

        // end or increment
        if (count === n) {
            return outer
        } else count++ ;

        // WORK OUT DIRECTIONS FOR NEXT RECURSION

        // when we need to change directions, evaluate
        if (dir[2] === dir[3]) {
            
            // decrement direction run length if it's the end of the second run
            if (dir[1]) { 
                dir[3] -- 
            };
            
            // toggle bool that keeps track of when to decrement run length
            dir[1] = !dir[1] ;

            // reset direction run counter
            dir[2] = 0 ;

            // set next direction
            if (dir[0] === 3) {
                dir[0] = 0
            } else {
                dir[0] ++
            };

            // otherwise just increment run counter
        } else {
            dir[2]++
        };

        // set next coords
        switch (dir[0]) {
            case 0: coords[0] ++ 
            case 1: coords[1] ++
            case 2: coords[0] --
            case 3: coords[1] --
        };

        fillMatrices(outer, count, coords, dir)
    };
};

module.exports = matrix;

        // // if () {
        //     if (dir[1] === 1) {
        //         dir[0] = 0
        //     } else if (count < n) {

        //     } else dir[0] = 1
        // // }