var plusOne = function(digits) {
    let addInPrev = false
    let addInPrevVal = 0
    let arr = digits

    for(let i=arr.length-1;i>=0;i--){
        if(i == arr.length-1){
            arr[i] = arr[i] + 1
            console.log(arr)
            if((arr[i] + 1)>9){
                addInPrev = true
                addInPrevVal = 1
            }
        }

        if(addInPrev){
            arr[i] = arr[i] + addInPrevVal
            if((arr[i]+addInPrevVal)>9){
                addInPrev = true
                addInPrevVal = 1
            }else{
                addInPrev = false
            }
        }
    }

    return arr
};

console.log(plusOne([1,2,3]))
console.log(plusOne([4,3,2,1]))
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))