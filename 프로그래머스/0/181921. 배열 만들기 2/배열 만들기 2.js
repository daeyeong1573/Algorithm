function solution(l, r) {
    const result = [];
    const queue = ['5'];
    
    while (queue.length > 0) {
        const numStr = queue.shift();
        const num = parseInt(numStr);
        
        if (num > r) continue;
        if (num >= l) result.push(num);
        
        queue.push(numStr + '0');
        queue.push(numStr + '5');
    }
    
    return result.length > 0 ? result.sort((a, b) => a - b) : [-1];
}

