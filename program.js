
// #2:
// function sum(){
//     let arr = process.argv.slice(2);
//     return arr.reduce(function(prev,next){
//         return Number(prev) + Number(next);
//     },0);
// }
// console.log(sum());

// // 3. My First I/O:
// var fs = require('fs');
// var buff = fs.readFileSync(process.argv[2]);
// var str = buff.toString();
// var num = str.split("\n").length-1;
// console.log(num);

// // 4. My First Asynch I/O:
// let fs = require('fs');
// fs.readFile(process.argv[2], function cb(error, buff){
//    // if(error) return console.log(error);
//     let str = buff.toString();
//     let num = str.split("\n").length-1;
//     console.log(num);   
// })

// 5. Filtered LS:

let fs = require('fs');

fs.readdir(process.argv[2], function cb(err, data){
    if(err) return console.error(err);
    let answer = "";
    for(let i = 0; i < data.length; i++){
        if(data[i].includes('.' + process.argv[3])) console.log(data[i]);
    }
})