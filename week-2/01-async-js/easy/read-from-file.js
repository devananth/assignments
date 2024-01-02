const fs = require('fs');

const filePath = "D:/100x-Cohort/assignments/week-2/01-async-js/easy/temp.txt";

fs.readFile(filePath , "utf-8" , function(err , data){
    if(err){
        console.error(err);
    } else{ 
        console.log(data);
    }
})

// expensiveFunc();

function expensiveFunc(){
    let sum = 0 ;
    for(let i = 0 ; i<10000000000 ; i++){
        sum += i;
    }
    console.log("Expensive Fn : " , sum);
}