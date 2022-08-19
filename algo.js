// const square = (n) => {
//     const a = Math.sqrt(n)
//     const b = Math.trunc(a)
//     if (a != b) return false
//     return true
// }

// console.log(square(25))

// const square = (n) => {
//     const x = Math.sqrt(n)
//     return x === Math.trunc(x)
// }

// console.log(square(25))


const square = (n) => ~~Math.sqrt(n) === Math.sqrt(n)

// var isSquare = function(n){
//     n = Math.sqrt(n);
//     return ~~n === n;
// }

// console.log(~5.3)//-6
// console.log(~~5.3)//5
///////////////////////////////////////////////////////////////////////////////////////

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
// function findOdd(A) {
//     let map = {};
//     for (let i = 0; i < A.length; i++){
//         const elem = A[i]
//         if (map[elem]) {
//             map[elem]++
//         }
//         else {
//             map[elem] = 1
//         }
//     }
//     for (key in map) {
//         const num = map[key]
//         if (num % 2 !== 0) {
//             return +key
//         } 
//     }
//     return 0;
// }
  
// console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]))


const reduce = (A) => A.reduce((a,b) => a ^ b)

console.log(reduce([12,23,12,23,23]))

console.log(10 ^ 13)
///////////////////////////////////////////////////////////////
// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

const stringLastFirst = (str) => {
   console.log(str.slice(1, str.length - 1))

}
console.log(stringLastFirst('qwertygdfgdfgfdgd'))

////////////////// getSum

const getSum = (a, b) => {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    let res = 0
    for (let i = min; i <= max; i++) {
        res += i
        // console.log(res)
    }
    return res
}
//(-1, 2) -> (-1 + 0 + 1 + 2  =  2)

console.log(getSum(1, 3))

//////////////
function opposite(number) {
    return number * -1
}

console.log(opposite(12.3))