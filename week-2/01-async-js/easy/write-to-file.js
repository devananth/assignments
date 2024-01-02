const fs = require('fs');

const filePath = "D:/100x-Cohort/assignments/week-2/01-async-js/easy/temp.txt";

fs.writeFile(filePath , "New update in the file" , function(err){
    if(err){
        console.error(err);
    }
})