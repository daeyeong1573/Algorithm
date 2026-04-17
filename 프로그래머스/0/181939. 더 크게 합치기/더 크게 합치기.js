function solution(a, b) {
    sum1 = String(a)+String(b)
    sum2 = String(b)+String(a)
    var answer = Number(sum1) > Number(sum2) ? sum1:sum2
    return Number(answer);
}