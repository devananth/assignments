function counter(n){
    for(let i = n ; i>=1 ; i--){
        let timerId = setTimeout(function(val){
            console.log(val);
            clearTimeout(timerId);
        },  1000*(n-i+1) , i);
    }
}

counter(5);