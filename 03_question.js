// 1411. Number of Ways to Paint N × 3 Grid

// You have a grid of size n x 3 and you want to paint each cell of the grid with exactly one of the three colors: Red, Yellow, or Green while making sure that no two adjacent cells have the same color (i.e., no two cells that share vertical or horizontal sides have the same color).

// Given n the number of rows of the grid, return the number of ways you can paint this grid. As the answer may grow large, the answer must be computed modulo 109 + 7.

var numOfWays = function(n) {
    const MOD = 1000000007;

    // dpA -> rows ending with type A (all 3 colors different)
    // dpB -> rows ending with type B (two colors same: ABA)
    let dpA = 6;
    let dpB = 6;

    for (let i = 2; i <= n; i++) {
        const newA = (dpA * 2 + dpB * 2) % MOD;
        const newB = (dpA * 2 + dpB * 3) % MOD;

        dpA = newA;
        dpB = newB;
    }

    return (dpA + dpB) % MOD;
};