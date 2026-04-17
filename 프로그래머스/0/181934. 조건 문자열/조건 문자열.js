function solution(ineq, eq, n, m) {
    x = ineq+eq
    switch(x){
        case ">=" : return Number(n>=m)
        case "<=": return Number(n<=m) 
        case ">!": return Number(n>m) 
        case "<!": return Number(n<m) 
    }
}