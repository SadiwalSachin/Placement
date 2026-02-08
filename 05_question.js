// 2943. Maximize Area of Square Hole in Grid
// Medium
// You are given the two integers, n and m and two integer arrays, hBars and vBars. The grid has n + 2 horizontal and m + 2 vertical bars, creating 1 x 1 unit cells. The bars are indexed starting from 1.

// You can remove some of the bars in hBars from horizontal bars and some of the bars in vBars from vertical bars. Note that other bars are fixed and cannot be removed.

// Return an integer denoting the maximum area of a square-shaped hole in the grid, after removing some bars (possibly none).

function maxArea(n, m, hBars, vBars) {
    let h = hBars.sort((a,b)=>a-b)
    let v = vBars.sort((a,b)=>a-b)
    let hMax = consecutive(h)
    let vMax = consecutive(v)
    let side = Math.min(hMax,vMax)
    return side*side
}

function consecutive(array) {
    if (array.length === 0) return 1;

    let maxRun = 1;
    let currentRun = 1;

    for (let i = 1; i < array.length; i++) {
        if (array[i] - array[i - 1] === 1) {
            currentRun++;
            maxRun = Math.max(maxRun, currentRun);
        } else {
            currentRun = 1;
        }
    }

    return maxRun + 1;
}
console.log(maxArea(3,2,[3,2,4],[3,2]))