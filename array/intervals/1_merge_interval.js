let arr = []

let start1 = arr[0][0]
let end1 = arr[0][1]

for(let i=1;i<arr.length;i++){
    let start2 = arr[i][0]
    let end2 = arr[i][1]

    if(end1>= start2){
        start1 = start1
        end1 = Math.max(end1,end2)
        continue
    }
    ans.push([start1,end1])
    start1 = start2
    end1 = end2
}

ans.push([start1,end1])