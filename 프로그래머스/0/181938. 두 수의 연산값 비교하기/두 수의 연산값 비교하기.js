function solution(a, b) {
    arr = [Number(String(a)+String(b)),2*a*b]
    var answer = Math.max(...arr);
    if(arr[0] === arr[1]) answer = arr[0]
    return answer;
}