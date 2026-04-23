function solution(num_list) {
    const x = Number(num_list.reduce((acc,n) => n%2 !== 0 ? acc+n : acc,""))
    const z = Number(num_list.reduce((acc,n) => n%2 === 0 ? acc+n : acc,""));
                          
    var answer = x+z ;
    return answer;
}