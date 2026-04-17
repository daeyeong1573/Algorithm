function solution(str1, str2) {
    let arr = [...str1,...str2];
    let answer = [];
    for(let i=0; i < arr.length/2;i++){
        answer.push(arr[i]);
        answer.push(arr[i+arr.length/2]);
    }
   
    return answer.join("");
}