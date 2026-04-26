function solution(arr, queries) {
    return queries.map(([s, e, k]) => {
        const candidates = arr.slice(s, e + 1).filter(x => x > k);
        return candidates.length ? Math.min(...candidates) : -1;
    });
}