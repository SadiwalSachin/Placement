// 1046. Last Stone Weight
// Easy
// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.

// my approach is that sort the array and run a loop from end while loop and check the values and destory them and return the last

let arr = [2,7,4,1,8,1]

function lastStoneWeight(stones){
    while(stones.length > 1){
        stones.sort((a,b)=>a-b)

        let lastOne = stones.pop()
        let secondOne = stones.pop()

        stones.push(Math.abs(secondOne-lastOne))
    }

    return stones[0]
}

console.log(lastStoneWeight(arr))