function solution(num_list) {
    const n = num_list.reduce((acc,num)=> acc*num,1);
    const x = num_list.reduce((acc,num)=> acc+num,0)
    var answer = n < Math.pow(x,2) ? 1 : 0
    return answer;
}