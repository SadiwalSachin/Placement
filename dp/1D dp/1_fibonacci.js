function fb(n,dp){
    if(n<=1) return dp[n] = n
    if(dp[n] != -1) return dp[n]
    return dp[n] =  fb(n-1,dp) + fb(n-2,dp)
}


// memoization 

let n = 10

let dp = new Array(n+1).fill(-1)

console.log(dp)

console.log(fb(n,dp))

console.log(dp)