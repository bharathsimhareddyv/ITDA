// CONDITIONS
// 1. IF
// 2. IF else
// 3. IF ELSE IF
// 4. NESTED IF
// 5. SWITCH

// IF - SINGLE STATEMENT CONDITION

// let role = "raju"
// if(role === "ramu"){
//    console.log("Welcome student")
// }

// const temparature = 46
// if(temparature > 45){
//       console.log("Its High Temparature Dont go out")
// }

// const password = "Bharath@12"
// if(password === "Bharath@123"){
//         console.log("Welcome Bharath")
// }

// const number = 17
// if(number > 0){
//   console.log("number is positive" +" " + number)
// }

// const value = 267845
// if(value%2 === 0){
//    console.log("Its an Even number")
// }
// if(value%2 != 0){
//     console.log("Its an odd number")
// }

// const marks = 430
// if(marks >=35 && marks<=100){
//    console.log("PASS")
// }

// const age = 3.1
// if(age <= 3){
//     console.log("No Ticket needed")
// }

// let age = 34
// if(age >60){
//    console.log("50% discount")
// }

// if(age < 18){
// console.log("not eligible to vote")
// }

// let x = 10
//  x+=50
//  console.log(x)

// let n = 55
//  if(n+= 4){
//    console.log("Marks are " + " "+ n)
//  }

//IF , ELSE - 2 STATEMENT CONDITIONS

// let age = 12
// if(age>18){
//   console.log("Eligible for Vote")
// }else{
//   console.log("Not Eligible ")
// }

// const light = "GREEN"
// if(light === "RED"){
//     console.log("STOP")
// }else{
//   console.log("GO")
// }

// const coupon = "MOVIE100"
// const price = 700
// const discount = 33
// const total = price  - price * discount /100
// if(coupon === "MOVIE100"){
//   console.log("Congrats u got 100 rs off total amount is " + total )
// }else{
//   console.log("NOT valid Coupon total amount is " + price)
// }

// const marks = 140
// if(marks >= 35 && marks <=100){
// console.log("PASS")
// }else{
//   console.log('FAIL')
// }

// const number = 101
// if(number%2 === 0){
//    console.log("EVEN")
// }else{
//   console.log("ODD")
// }

// IF ,ELSEIF - MULTIPLE STATEMENT CONDITIONS

// const color = "BLUE"
// if(color === "RED"){
//   console.log("STOP")
// }
// else if(color === "GREEN"){
// console.log("GO")
// }
// else if(color==="YELLOW"){
//   console.log("BE READY")
// }
// else{
//   console.log("NOT VALID SIGN")
// }

const marks = 65
if(marks > 100){
   console.log("INVALID")
}
else if(marks >= 90){
    console.log("A GRADE")
}
else if(marks >= 75){
  console.log("B GRADE")
}
else if(marks > 50){
console.log("C GRADE")
}
else{
  console.log("FAIL")
}