function counter(n){
    let timerId = setInterval(function(){
        if(n === 0){
            console.log("The End . . .");
            clearInterval(timerId);
        } else{
            console.log(n);
        }
        n-=1;
    },1000);
}

counter(5);