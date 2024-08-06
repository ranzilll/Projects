// const users = [
//     { firstName: "akshay" , lastName: "saini", age: 26},
//     { firstName: "donald" , lastName: "trump", age: 75},
//     { firstName: "elon" , lastName: "musk", age: 50},
//     { firstName: "deepika" , lastName: "padukone", age: 26},
// ];


// #reduce
// console.log(users);

// const output = users.reduce((acc,curr) =>{
//     if(acc[curr.age]){
//         acc[curr.age] = ++ acc[curr.age];
//     }
//     else{
//         acc[curr.age] = 1;
//     }
//     return acc;
// },{})

// console.log(output);

// #filter
// const output = users.filter( x => x.age <30)
// .map((x) => x.firstName);

// console.log(output);
    



// const input = [1,2,3,4,5];

// //formap
// const output = input.map((x)=>x+=1)
// console.log(output);

// // filter
// const output2 = input.filter((x) => x%2!==0)
// console.log(output2);

// // reduce
// const output3 = input.reduce((max,curr) =>{
//     return max > curr ? max : curr;
// },0)
// console.log(output3);

// const output4 = input.filter((x)=> x%2==0).map((x)=> x*2)
// .reduce((acc,x)=>{
//     return acc +=x
// },0);
// console.log(output4);

// map&filter 
// const strings = ["apple", "bat", "cat", "elephant"];

// const output = strings.filter(str => str.length >3).map(str=> str.length);
// console.log(output);

// Filter and Reduce: Sum All Prime Numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Helper function to check if a number is prime
const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
 
  // Step 1: Filter to get only prime numbers
  const primeNumbers = numbers.filter(isPrime);
  
  // Step 2: Sum all prime numbers
  const sumOfPrimes = primeNumbers.reduce((acc, x) => acc + x, 0);
  
  console.log(sumOfPrimes); // Output: 17

