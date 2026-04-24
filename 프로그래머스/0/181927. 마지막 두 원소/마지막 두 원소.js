function solution(num_list) {
    const len = num_list.length 
    const a = num_list[len-1]
    const b = num_list[len-2]
    const x = a > b ? a-b : a*2 
    var answer = [...num_list,x];
    return answer;
}