let items = [[20,2],[30,3],[50,4],[60,5],[100,9]]

function knapsack(items,w,n,dp){
    if(n==0 || w==0) return 0

    if(dp[n][w] != -1) return dp[n][w]

    let value = items[n-1][0]
    let weight = items[n-1][1]
    if(weight <= w){
        let include = value + knapsack(items,w-weight,n-1,dp)
        let exclude = knapsack(items,w,n-1,dp)
        return dp[n][w] =  Math.max(include,exclude)
    }else{
        return dp[n][w] = knapsack(items,w,n-1,dp)
    }
}

let w = 10

let dp = Array.from(
    {length:items.length+1},
    () => Array(w+1).fill(-1)
)



console.log(knapsack(items,10,items.length,dp))