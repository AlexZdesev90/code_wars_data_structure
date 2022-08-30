let x = 10;
function change() {
  let x = 23;
  return x;
}
console.log(x);
change();
console.log(x);
console.log(x);

function zam() {
  console.log(x);
  for (let i = 1; i < 3; i++) {
    x += i;
  }
  var x = 10;
  return x;
}

console.log(zam());

// {
//     console.log(y)
// }
// let y = 1000

function sc() {
  console.log(z);
  var z = 1000;
}

// console.log(z)
sc();

console.log(myFunction());

// code here can use carName

function myFunction() {
  carName = "Volvo";
}
console.log(window);

// car = "Volvo";
// const car;

function cons(el) {
  console.log(el);
}

function calc(num1, num2, fn) {
  let res = num1 + num2;
  fn(res);
}

calc(10, 20, cons);
calc(550, 20, cons);

Object.prototype.prind = function () {
  return this;
};
let op = { name: 12 };
console.log(op.prind());

let r = {
  name: "a"
};

let me = {
  name: "Al",
  getName() {
    // console.log(this.name);
  }
};

setTimeout(me.getName.bind(r), 1000);

{
  var a = 5;
  let b = 7;
  function myFunc() {
    var c = 5;
  }
}
//   myFunc();
//   console.log(a);//5
//   console.log(b); //refer
//   console.log(c); //refer

function reso(num) {
  let res = 0;
  for (let i = 0; i < num; i++) {
    res += 1 / (1 + i * 3);
  }
  return res.toFixed(2);
}
console.log(reso(1));

function compareXAndO(str) {
  //   let arr = str.toUpperCase().split("");
  //   console.log(arr);
  //   let res = {};
  //   for (let i = 0; i < arr.length; i++) {
  //     let curr = arr[i];
  //     if (curr === "X" || curr === "O") {
  //       if (res[curr]) {
  //         res[curr]++;
  //       } else {
  //         res[curr] = 1;
  //       }
  //     }
  //   }
  //   if (res["X"] === res["O"] || Object.entries(res).length === 0) {
  //     return true;
  //   }
  //   return false;

  let xxxx = str.match(/x/gi);
  console.log(xxxx); //['x', 'x']
  let oooo = str.match(/o/gi); // ['o', 'o']
  console.log(oooo);
  return (xxxx && xxxx.length) === (oooo && oooo.length);
}
console.log(compareXAndO("xxoo"));
console.log(false && true);

///////accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function stringer(s) {
  let res = "";
  s = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    let x = curr.repeat(i + 1);
    res += "-" + x[0].toUpperCase() + x.slice(1);
  }
  return res.slice(1);
}

stringer("abs");

// "1 2 3 4"  ==>  return 0, because the sequence is complete

// "1 2 4 3"  ==>  return 0, because the sequence is complete (order doesn't matter)

// "2 1 3 a"  ==>  return 1, because it contains a non numerical character

// "1 3 2 5"  ==>  return 4, because 4 is missing from the sequence

// "1 5"      ==>  return 2, because the sequence is missing 2, 3, 4 and 2 is the lowest

function sequ(str) {
  let real = str.split(" ").sort().map(Number);
  // if (arr.length === 0) {
  //   return 0
  // }
  console.log(real); //[1, 3]
  // let rr = []
  let max = Math.max(...real); //5
  let min = Math.min(...real);
  // console.log(min)
  let create = [];
  while (min <= max) {
    create.push(min);
    min += 1;
  }
  console.log(create); //[1, 2, 3]
  // // if (typeof current === NaN) {
  //   //   return false
  //   // }
  for (let i = 0; i < create.length; i++) {
    for (let k = 0; k < real.length; k++) {
      if (real.includes(create[i]) === false) {
        return create[i];
      }
    }

    // for (let i = 0; i < one.length; i++){
    //   for (let k = 0; k < two.length; k++){

    //     if (!two.includes(one[i])) {
    //         return one[i]
    //       }
    //   }
    // }
  }
}

console.log(sequ("1 2 5 3"));
// function findMissingNumber(sequence){
//   let arr= sequence.split(" ").sort().map(Number);
//    if (arr.length === 0) {
//     return 0
//   }
//   if(arr[0] !== "1") {
//     return 1
//     }
//   let max = Math.max(...sequence);//5
//   let min = 1;
//   let res = [];
//   while ( min <= max) {
//     res.push(min);
//     min += 1;
//   }
//   if (res.length === sequence.lenght) {
//     return 0
//   }
//   for (let i = 0; i < arr.length; i++) {
//     let current = arr[i]
//     if (isNaN(current)) {
//       return 1
//     }
//     if (arr[current]) {
//       res.splice(0, 1)
//     }
//     if (!res[current]) {
//       return res[0]
//     }
//   }
// }

// function ro(sequence){
//   let arr= sequence.split(" ").sort().map(Number);
//    if (arr.length === 0) {
//     return 0
//   }
//   if(arr[0] !== "1") {
//     return 1
//     }
//   let max = Math.max(...sequence);//5
//   let min = 1;
//   let res = [];
//   while ( min <= max) {
//     res.push(min);
//     min += 1;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     let current = arr[i]
//     if (isNaN(current)) {
//       return 1
//     }
//     if (arr[current]) {
//       res.splice(0, 1)
//     }
//     if (!res[current]) {
//       return res[0]
//     }
//   }
// }

// console.log(ro("1 5"))

////highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(str) {
  let max = Math.max(...str.split(" "));
  let min = Math.min(...str.split(" "));
  return max + " " + min;
}
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"

var number = function (busStops) {
  //([[10,0],[3,5],[5,8]]),5
  let count = 0;
  for (let i = 0; i < busStops.length; i++) {
    let currentStop = busStops[i];
    count += currentStop[0];
    count -= currentStop[1];
  }
  return count;
};

// console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))

///
function sumMix(x) {
  let res = 0;
  for (let curr of x) {
    if (typeof curr === "string") {
      res += Number(curr);
    } else {
      res += curr;
    }
  }
  return res;
}

const sumMixo = (xii) =>
  //   // let res = 0;
  //   // x.map(el => res += (typeof el === 'string') ? +el : el)
  //   // return res

  xii.reduce((a, c) => a + +c, 0);

// const sumMMix = (arr) => arr.reduce((sum, n) => sum + (+n), 0);

// console.log(sumMixo([9, 3, '7', '3']))

// ////////////////////////////////
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(str) {
  let arr = str.split(" ");
  let max = Math.min(...arr);
  let min = Math.max(...arr);
  return `${max} ${min}`;
}
console.log(highAndLow("1 3 7"));

///Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function removeVowel(str) {
  let resultString = "";
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (
      current === "a"
      || current === "e"
      || current === "i"
      || current === "o"
      || current === "A"
      || current === "E"
      || current === "I"
      || current === "O"
    ) {
      continue;
    } else {
      resultString += current;
    }
  }
  return resultString;
}

console.log(removeVowel("This website is for losers LOL"));

///
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


function isogram(str) {
  let arr = [...str.toLowerCase()]
  // console.log([...new Set(arr)])
  return Array.from(new Set(arr)).length === arr.length
}

console.log(isogram('Dermatoglyphics'))
console.log(isogram('aba'))

//Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"

function repeatDigits(str) {
  let res = '';
  // let stri = str.split('')
  for (let i = 0; i < str.length; i++){
    let current = str[i];
    let currStr = current.repeat(current)
    res += currStr
  }
  return res
}

console.log(repeatDigits('312'))

console.log('4'.repeat(5))

/////Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

// Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

// However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

// Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes(a pair of farmers handshake only once).
//2 == 1
//3 == 3
//4 == 6
//5 == 10


//Haskell has some useful functions for dealing with lists:

// $ ghci
// GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
// λ head [1,2,3,4,5]
// 1
// λ tail [1,2,3,4,5]
// [2,3,4,5]
// λ init [1,2,3,4,5]
// [1,2,3,4]
// λ last [1,2,3,4,5]
// 5
// Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

// | HEAD | <----------- TAIL ------------> |
// [  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
// | <----------- INIT ------------> | LAST |

// head [x] = x
// tail [x] = []
// init [x] = []
// last [x] = x
// Here's how I expect the functions to be called in your language:

// head([1,2,3,4,5]); => 1
// tail([1,2,3,4,5]); => [2,3,4,5]

function head(arr) {
  return arr.shift()
}
function tail(arr) {
  arr.shift()
  return arr
}
console.log(head([12,45,67]))
console.log(tail([12, 45, 67]))


///You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.

// The function should contain at least 1 argument per set.

// calculate(1)(1) // should return 2
// calculate(1,1)(1) // should return 3
// calculate(1,1)(1,-1) // should return 2
// calculate(2,4)(3,7,1) // should return 17

function calculate() {
  let res = 0;
  for (let i = 0; i < arguments.length; i++){
    res += arguments[i]
  }
  return function () {
    for (let k = 0; k < arguments.length; k++){
      res += arguments[k]
    }
    return res
  }
}
console.log(calculate(9, 7, 9, 7)(7, 5))

console.log(calculate(1)(1)) // should return 2
console.log(calculate(1,1)(1)) // should return 3
console.log(calculate(1,1)(1,-1)) // should return 2
console.log(calculate(2, 4)(3, 7, 1)) // should return 17


///You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

// Note: the scores will always be unique (so no duplicate values)

// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []


function objTest(obj) {
  // console.log(Object.entries(obj)[1][1])
  // let res = []
  // for (let [name, number] of Object.entries(obj)) {
  //   if (+number >= 60) {
  //     res.push(name)
  //   }
  // }
  // return res

  return Object.entries(obj).filter(el => el[1] >= 60).map(el => el[0])
}

console.log(objTest({ "Java": 10, "Ruby": 80, "Python": 65 }))
console.log(objTest({"Hindi": 60, "Dutch" : 93, "Greek": 71}))  //-->  ["Dutch", "Greek", "Hindi"]


