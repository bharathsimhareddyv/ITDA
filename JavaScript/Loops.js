//LOOPS
//1. FOR -- KNOWN CONDITION
//2. WHILE -- UNKNOWN CONDITION 
//3. DO-WHILE -- 


//EVEN AND ODD

// for(let i=0 ; i<=10 ; i++){
//    if(i%2 ===0){
//       console.log(i)
//    }
// }

// let j =0
// while(j<=10){
//   if(j%2!==0){
//    console.log(j)
//   }
//    j++
// }

//PRIME NUMBERS

// for(let i =1 ; i<=100; i++){
//    let factors =0
//    for(let j = 1 ; j<=i ; j++){
//         if(i %j === 0){
//            factors++
//         }
//    }
// if(factors === 2){
//     console.log(i)
// }
// }

// let i =1
// while(i<=100){
//     let fact = 0
//     let j =1 
//     while(j<=i){
//         if(i%j === 0){
//           fact++
//         }
//         j++
//     }
// if(fact ===2){
//     console.log(i)
// }
// i++
// }

//GIVEN NUMBER PRIME OR NOT-PRIME
// let n =17
// let factors=0
// for(let j =1 ; j<=n;j++){
// if(n%j === 0){
// factors++
// }
// }
// if(factors===2){
//     console.log("PRIME NUMBER")
// }else{
//     console.log("Not a prime")
// }

//HOW MANY FACTORS
// let n = 126464646146
// let factors = 0
// for(let j = 1; j<=n ; j++){
//   if(n%j===0){
//    factors++
//   }
// }

// console.log(factors)

//COUNT 

// let n = 32456
// let count = 0
// while(n>0){
// n = Math.floor(n / 10)
// count++
// }
// console.log(count)

//SUM OF DIGITS

// let n = 32456
// let sum = 0
// while(n>0){
// let digit = n%10
// sum += digit
// n = Math.floor(n/10)
// }

// console.log(sum)