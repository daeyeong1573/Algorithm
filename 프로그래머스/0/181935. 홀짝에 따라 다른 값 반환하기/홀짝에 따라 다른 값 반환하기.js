function solution(n) {
    var answer = 0;
    let nType = n%2===0;
    
    for(i = 1 ; i<n+1;i++){
        
        if(nType){
            if(i%2 === 0) answer +=(i*i);
        }else{
            if(i%2 != 0)    answer += i;
        }
    }
    
    return answer;
}
