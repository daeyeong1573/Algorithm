function solution(a, d, included) {
    let x = []
    let sum = a
    var answer = 0
    for(let i =0 ; i<included.length ; i++){
        x[i] = sum;
        sum+=d
    }
    included.forEach((i,index)=> answer+= i ? x[index] : 0)
    return answer;
}