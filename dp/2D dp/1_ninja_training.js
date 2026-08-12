// A ninja who is going to be trained for the N days. Each days he can perform upto 3 skills or keeping that he cannot perfrom the same activity or task on the consecutive days. For each activity he will get merit points . Now my task is to maximize this merit points

function ninjaTraining(points){
    function helper(day,last,points){
        if(day == 0){
            let maxi = 0;
            for(let task=0;task<3;task++){
                if(last != i){
                    maxi = Math.max(maxi,day[0][i])
                }
            }
            return maxi
        }

        let maxi = 0
        for(let task=0;task<3;task++){
            if(task != last){
                let current = points[day][task] + helper(day-1,task,points)
                maxi = Math.max(current,maxi)
            }
        }

        return maxi
    }
}

const dp = Array.from({length:points.length+1},()=>Array.from(points[0].length+1).fill(-1)) 