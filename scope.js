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
      current === "a" ||
      current === "e" ||
      current === "i" ||
      current === "o" ||
      current === "A" ||
      current === "E" ||
      current === "I" ||
      current === "O"
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
  let arr = [...str.toLowerCase()];
  // console.log([...new Set(arr)])
  return Array.from(new Set(arr)).length === arr.length;
}

console.log(isogram("Dermatoglyphics"));
console.log(isogram("aba"));

//Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// explode("312")
// should return :

// "333122"

function repeatDigits(str) {
  let res = "";
  // let stri = str.split('')
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    let currStr = current.repeat(current);
    res += currStr;
  }
  return res;
}

console.log(repeatDigits("312"));

console.log("4".repeat(5));

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
  return arr.shift();
}
function tail(arr) {
  arr.shift();
  return arr;
}
console.log(head([12, 45, 67]));
console.log(tail([12, 45, 67]));

///You are writing a function that takes two sets of arguments of arbitrary length. The return value will be the sum of the values of all of the arguments.

// The function should contain at least 1 argument per set.

// calculate(1)(1) // should return 2
// calculate(1,1)(1) // should return 3
// calculate(1,1)(1,-1) // should return 2
// calculate(2,4)(3,7,1) // should return 17

function calculate() {
  let res = 0;
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return function () {
    for (let k = 0; k < arguments.length; k++) {
      res += arguments[k];
    }
    return res;
  };
}
console.log(calculate(9, 7, 9, 7)(7, 5));

console.log(calculate(1)(1)); // should return 2
console.log(calculate(1, 1)(1)); // should return 3
console.log(calculate(1, 1)(1, -1)); // should return 2
console.log(calculate(2, 4)(3, 7, 1)); // should return 17

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

  return Object.entries(obj)
    .filter((el) => el[1] >= 60)
    .map((el) => el[0]);
}

console.log(objTest({ Java: 10, Ruby: 80, Python: 65 }));
console.log(objTest({ Hindi: 60, Dutch: 93, Greek: 71 })); //-->  ["Dutch", "Greek", "Hindi"]

function getParticipants(handshakes) {
  if (handshakes === 1) {
    return 2;
  }
  if (handshakes === 2) {
    return 3;
  }
  for (let i = 1; i <= handshakes; i++) {
    let current = 0;
    for (let k = i - 1; k >= 0; k--) {
      current += k;
    }
    if (current >= handshakes) {
      return i;
    }
  }
  return 0;
}

console.log(getParticipants(2));

//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function dupl(str) {
  let newS = [];
  let obje = {};
  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    if (obje[curr]) {
      obje[curr]++;
    } else {
      obje[curr] = 1;
    }
  }
  console.log(obje);
  for (let k = 0; k < str.length; k++) {
    if (obje[str[k]] > 1) {
      newS.push(")");
    } else {
      newS.push("(");
    }
  }

  return newS.join("");
}
console.log(dupl("fefrrgt"));
console.log(dupl("din")); //  "((("
console.log(dupl("recede")); //=>  //"()()()"
console.log(dupl("Success")); //=>  //")())())"
console.log(dupl("(( @")); //=>  //"))(("

//I love Fibonacci numbers in general, but I must admit I love some more than others.

// I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

// For example:

//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

function nthFibo(n) {
  //n = 4
  let arr = [0, 1];
  if (n === 0) return;
  if (n === 1) return 0;
  let current = 0;
  for (let i = 0; i < n - 2; i++) {
    current = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(current);
  }
  console.log(arr);
  return current;
}
//0,1,1,2,3,5,8,13
console.log(nthFibo(8));

///If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

//10 === 3+5+6+9
function naturalNumbersBy3Or5(n) {
  let res = 0;
  for (let i = 1; i < n; i++) {
    if (i % 3 == 0) {
      res += i;
      continue;
    } else if (i % 5 == 0) {
      res += i;
      continue;
    } else {
      continue;
    }
  }
  return res;
}

console.log(naturalNumbersBy3Or5(10));

function mul(n) {
  let res = 0;
  n = n - 1;
  while (n >= 0) {
    if (!(n % 3) || !(n % 5)) {
      res += n;
      console.log(res);
    }
    n--;
  }
  return res;
}
//6+5+3
console.log(mul(7));

//Array.prototype.length will give you the number of top-level elements in an array.

// Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.

// deepCount([1, 2, 3]);
// //>>>>> 3
// deepCount(["x", "y", ["z"]]);
// //>>>>> 4
// deepCount([1, 2, [3, 4, [5]]]);
// //>>>>> 7

function deepCount(arr) {
  let sum = 0;
  arr.map((el) => {
    if (Array.isArray(el)) {
      sum += deepCount(el);
    }
    sum += 1;
  });
  return sum;
}

console.log(deepCount([1, 2, [3, 4]])); //5
console.log(deepCount(["x", "y", ["z"]])); //4
console.log(deepCount([1, 2, [3, 4, [5]]])); //7

function ooo() {
  "use strict";
  return typeof null;
}

console.log(ooo());

//
//You get an array of arrays.
// If you sort the arrays by their length, you will see, that their length-values are consecutive.
// But one array is missing!

// You have to write a method, that return the length of the missing array.

// Example:
// [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

// If the array of arrays is null/nil or empty, the method should return 0.

// When an array in the array is null or empty, the method should return 0 too!
// There will always be a missing element and its length will be always between the given arrays.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

function length(arrayOfArrays) {
  let x = arrayOfArrays
    .sort((a, b) => a.length - b.length)
    .map((el) => el.length);
  console.log(x);
  for (let i = 0; i < x.length - 1; i++) {
    if (x[i + 1] - x[i] === 1) {
      continue;
    } else if (x[i + 1] - x[i] === 2) {
      return x[i] + 1;
    }
  }
  return 0;
}

console.log(length([[1], [1, 2], [1, 2, 3, 4]]));
console.log(length([[null], [null, null, null]]));
console.log(length([[]]));
// console.log([[1,2,5,6,7,8,9,10],[1,2,3],[1,2,3,4,5]].sort((a, b) => a.length - b.length))

// console.log([12,13,14,15].map(el => el*2))

///
//input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)
// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

function drower(arr) {
  let res = 0;
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (map[current]) {
      map[current]++;
    } else {
      map[current] = 1;
    }
  }
  for (let [_, number] of Object.entries(map)) {
    res += number / 2;
  }
  if (res === 1) return 1;
  return Math.floor(res) === 1 ? 0 : Math.floor(res);
}

console.log(drower(["red", "red", "red", "red", "red", "red"]));
console.log(drower(["red", "green", "red", "blue", "blue"]));
console.log(drower(["red", "green", "blue"]));
console.log(drower(["red", "red"]));

//In this kata you're expected to sort an array of 32-bit integers in ascending order of the number of on bits they have.

// E.g Given the array [7, 6, 15, 8]

// 7 has 3 on bits (000...0111)
// 6 has 2 on bits (000...0011)
// 15 has 4 on bits (000...1111)
// 8 has 1 on bit (000...1000)
// So the array in sorted order would be [8, 6, 7, 15].

// In cases where two numbers have the same number of bits, compare their real values instead.

// E.g between 10 (...1010) and 12 (...1100), they both have the same number of on bits '2' but the integer 10 is less than 12 so it comes first in sorted order.

// Your task is to write the function sortBybit() that takes an array of integers and sort them as described above.

// Note: your solution has to sort the array in place.

// Example:

// [3, 8, 3, 6, 5, 7, 9, 1]   =>    [1, 8, 3, 3, 5, 6, 9, 7]

function sortByBit(arr) {
  return arr.sort((a, b) =>
    a.toString(2).replace(/0/g, "").length ===
    b.toString(2).replace(/0/g, "").length
      ? a - b
      : a.toString(2).replace(/0/g, "").length -
        b.toString(2).replace(/0/g, "").length
  );
}

// setTimeout(() => console.log([3, 8, 3, 6, 5, 7, 9, 1].sort((a,b) => a-b)), 500)//[1, 3, 3, 5, 6, 7, 8, 9]
console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]));

//Our nuclear missile manager system is coded in Node.js. We are currently testing the system and it seems that the launchAll function does not work as expected. It should launch 5 missiles each 1 second apart. The current code tries to launch the missile #5 five times...

// Can you fix this for us? You know, it's pretty critical code...

// Note: There are 5 missiles labeled i which is a number in {0, 1, 2, 3, 4}. The missile i should be launched after i seconds.

// function launchAll(launchMissile) {
//   for (var i = 0; i < 5; i++) {
//     return function () {

//       setInterval((i) =>
//         launchMissile(i), i * 1000);
//     }
//   }
// }

// console.log(launchAll(launchMissile))
function launchAll(launchMissile) {
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      launchMissile(i);
    }, i * 1000);
  }
}

// We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:

// var callbacks = createFunctions(5); // create an array, containing 5 functions

// callbacks[0](); // must return 0
// callbacks[3](); // must return 3
// We already implemented that function, but when we actually run the code, the result doesn't look like what we expected. Can you spot, what's wrong with it? A test fixture is also available

function createFunction(n) {
  let callbacks = [];
  for (let i = 0; i < n; i++) {
    callbacks.push(() => {
      return i;
    });
  }
  return callbacks;
}

let callbacks = createFunction(5);
console.log(callbacks[3]());

//There's no such thing as private properties on a coffeescript object! But, maybe there are?

// Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

// getSecret() which returns the secret
// setSecret() which sets the secret
// obj = createSecretHolder(5)
// obj.getSecret() # returns 5
// obj.setSecret(2)
// obj.getSecret() # returns 2
function createSecretHolder(n) {
  return {
    getSecret: function () {
      return n;
    },
    setSecret: function (x) {
      n = x;
    }
  };
}

let obj = createSecretHolder(5);
console.log(obj.getSecret());
obj.setSecret(7);
console.log(obj.getSecret());

function createSecretHolder(secret) {
  var _secret = secret;
  return {
    setSecret: function (s) {
      _secret = s;
    },
    getSecret: function () {
      return _secret;
    }
  };
}

//Task
// Your task is to write such a run-length encoding. For a given string, return a list (or array) of pairs (or arrays) [ (i1, s1), (i2, s2), …, (in, sn) ], such that one can reconstruct the original string by replicating the character sx ix times and concatening all those strings. Your run-length encoding should be minimal, ie. for all i the values si and si+1 should differ.

// Examples
// As the article states, RLE is a very simple form of data compression. It's only suitable for runs of data, as one can see in the following example:

// runLengthEncoding("hello world!")
//  //=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
// It's very effective if the same data value occurs in many consecutive data elements:

// runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
//  // => [[34,'a'], [3,'b']]

function runLengthEncoding(str) {
  let arr = [];
  let num = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      arr.push([num, str[i]]);
      num = 1;
    } else {
      num++;
    }
  }
  return arr;
}

// console.log(runLengthEncoding('fdsetgsfadagrfdefgg'))
console.log(runLengthEncoding("hell wol"));

//You will be given a list of objects. Each object has type, material, and possibly secondMaterial. The existing materials are: paper, glass, organic, and plastic.

// Your job is to sort these objects across the 4 recycling bins according to their material (and secondMaterial if it's present), by listing the type's of objects that should go into those bins.

// Notes
// The bins should come in the same order as the materials listed above
// All bins should be listed in the output, even if some of them are empty
// If an object is made of two materials, its type should be listed in both of the respective bins
// The order of the type's in each bin should be the same as the order of their respective objects was in the input list
// Example
// input = [
//   {"type": "rotten apples", "material": "organic"},
//   {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
//   {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
//   {"type": "amazon box", "material": "paper"},
//   {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
// ]

// output = [
//   ["wine bottle", "amazon box", "beer bottle"],//paper
//   ["wine bottle", "beer bottle"],//glass
//   ["rotten apples", "out of date yogurt"],//organic
//   ["out of date yogurt"]//plastic
// ]

function recycle(listOfObj) {
  let res = [[], [], [], []];
  for (let i = 0; i < listOfObj.length; i++) {
    let current = listOfObj[i];
    if (current.material === "paper" || current.secondMaterial === "paper") {
      res[0].push(current.type);
    }
    if (current.material === "glass" || current.secondMaterial === "glass") {
      res[1].push(current.type);
    }
    if (
      current.material === "organic" ||
      current.secondMaterial === "organic"
    ) {
      res[2].push(current.type);
    }
    if (
      current.material === "plastic" ||
      current.secondMaterial === "plastic"
    ) {
      res[3].push(current.type);
    }
  }
  return res;
}

console.log(
  recycle([
    { type: "rotten apples", material: "organic" },
    {
      type: "out of date yogurt",
      material: "organic",
      secondMaterial: "plastic"
    },
    { type: "wine bottle", material: "glass", secondMaterial: "paper" },
    { type: "amazon box", material: "paper" },
    { type: "beer bottle", material: "glass", secondMaterial: "paper" }
  ])
);

//Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(customersCode, codeValid, yourDate, expirationDate) {
  if (customersCode === codeValid) {
    if (new Date(expirationDate) - new Date(yourDate) >= 0) {
      return true;
    }
  }
  return false;
}

console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"));
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"));

// console.log( (new Date("July 9, 2015") - new Date("July 2, 2015")) > 0)

//Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
// Find the number of Friday 13th in the given year.
// Input: Year in Gregorian calendar as integer.
// Output: Number of Black Fridays in the year as an integer.
// Examples:
// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

// function unluckyDays(year) {

//   let arr = [];
//   let day = new Date(year)
//   let count = 0;
//   if (day.getDate() === 13) {
//     count++
//   }
//   return count
// }

// console.log(unluckyDays(2015))

function unluckyDays(year) {
  let reslet = 0;
  for (let i = 0; i < 13; i++) {
    if (new Date(year, i, 13).getDay() === 5) {
      reslet++;
    }
  }
  return reslet;
}

console.log(unluckyDays(2015));

console.log(new Date(2015, 2, 13).getDay());

console.log(new Date(2015, 1, 13));

////////////////////////////////////////////////////////////////////////////////////////

function readableFormat(seconds) {
  if (seconds === 0) {
    return "now"
  }
  if (seconds === 1) {
    return "1 second"
  }
  let res = [[], [], [], [], []];
  let years = 0;
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let count = seconds;
  if (seconds < 60) {
    return seconds + " seconds";
  }
  if (seconds >= 3153600) {
    years = (seconds / 3153600).toFixed(0);
    count -= years * 3153600;
    let y = years > 1 ? years + " years" : years + " year";

    res[0].push(y);
  }
  if (count >= 86400 && count < 3153600) {
    days = (count / 86400).toFixed(0);
    count -= days * 86400;
    let d = days > 1 ? days + " days" : years + " day";
    res[1].push(d);
  }
  if (count >= 3600 && count < 86400) {
    hours = (count / 3600).toFixed(0);
    count -= hours * 3600;
    let h = hours > 1 ? hours + " hours" : hours + " hour";
    res[2].push(h);
  }
  if (count >= 60 && count < 3600) {
    minutes = (count / 60).toFixed(0);
    count -= minutes * 60;
    let m = minutes > 1 ? minutes + " minutes" : minutes + " minute";
    res[3].push(m);
  }
  if (count > 0) {
    console.log(count);
    let c = count > 1 ? count + " seconds" : count + " second";
    res[4].push(c);
  } else {
    res[4].push()
  }
  console.log(res);
  let result = "";
  let newArr = res.filter((el) => el.length !== 0);

  for (let i = 0; i < newArr.length; i++) {
    let current = newArr[i];
    if (current === newArr[0]) {
      result += current;
      continue;
    }
    if (current === newArr[newArr.length - 1]) {
      result += " and " + current;
      continue;
    }
    result += ", " + current;
  }
  return result;
}
console.log(readableFormat(1));
// console.log(new Array(5).fill([]))
// console.log(2.435464.toFixed(0))
