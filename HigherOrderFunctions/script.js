const radius = [3,1,2,4];

const area = function(radius){
    return Math.PI * radius * radius;
}

const circumference = function(radius){
    return 2 * Math.PI * radius;
}

const diameter = function(radius){
    return 2 * radius;
}

// const calculate = function(radius,logic){
//     const output = [];
//     for(let i = 0;i< radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// };

// arrow function syntax 
// const calculate (radius,logic)=> {
//     const output = [];
//     for(let i = 0;i< radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// };

console.log(radius.map(diameter));


// console.log(calculate(radius,diameter));