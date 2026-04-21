function solution(code) {
    let mode = 0;
    let answer = [];
    
    for (let i = 0; i < code.length; i++) {
        if (code[i] === "1") {
            mode = mode === 0 ? 1 : 0;
            continue;
        }
        if (mode === 0 && i % 2 === 0) answer.push(code[i]);
        if (mode === 1 && i % 2 !== 0) answer.push(code[i]);
    }
    
    const ret = answer.join('');
    return ret === "" ? "EMPTY" : ret;
}