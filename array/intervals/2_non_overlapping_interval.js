let intervals =  [[1,2],[2,3],[3,4],[1,3]]
let count = 0

let start1 = intervals[0][0]
let end1 = intervals[0][1]

for(let i=1;i<intervals.length;i++){
    let start2 = intervals[i][0]
    let end2 = intervals[i][1]

    if(start2<end1){ // this is the condition of overlappin
        count++
        continue
    }
    start1=start2
    end1=end2
}

console.log(count)