let testCases = [
    {
        cell: 1,
        neighbors: [0, 1, 0]
    },
    {
        cell: 0,
        neighbors: [1, 1, 1]
    },
    {
        cell: 1,
        neighbors: [0, 0, 1]
    },
    {
        cell: 0,
        neighbors: [1, 0, 0]
    },
    {
        cell: 1,
        neighbors: [0, 1, 1]
    },
    {
        cell: 1,
        neighbors: [1, 1, 1] // added an extra cell to test the third rule
    }
];

function gameofLife(i) {
    // find number of live and dead neighbours
    let deadCount = countDead(testCases[i].neighbors);
    let aliveCount = 3 - deadCount;
    // check whether cell is dead or alive
    // if current cell is alive then
    if (testCases[i].cell) {
        if (aliveCount < 2) {
            return false; // cell is dead
        } else if (aliveCount > 3) {
            return false; // cell dies
        } else if (aliveCount === 2 || aliveCount === 3) {
            return true; // cell lives
        }
        // if current cell is dead then
    } else {
        if (aliveCount === 3) {
            return true; // cell lives
        }
    }
}

// count frequency of 0s (dead)
function countDead(array) {
    let frequency = 0;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element == 0) {
            frequency++;
        }
    }
    return frequency;
}


export { gameofLife, countDead }