function solution(n, control) {
    const delta = { w: 1, s: -1, d: 10, a: -10 };
    return [...control].reduce((acc, c) => acc + delta[c], n);
}