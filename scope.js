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

    let xxxx = str.match(/x/gi)
    console.log(xxxx)//['x', 'x']
    let oooo = str.match(/o/gi)// ['o', 'o']
    console.log(oooo)
    return (xxxx && xxxx.length) === (oooo && oooo.length)
}
console.log(compareXAndO("xxoo"));
console.log(false && true)


///////accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


function stringer(s) {
    let res = '';
  s = s.toLowerCase()
    for (let i = 0; i < s.length; i++){
        let curr = s[i];
        let x = curr.repeat(i + 1)
        res += '-' + x[0].toUpperCase() + x.slice(1)
    }
  return res.slice(1)
}

stringer("abs")

// "1 2 3 4"  ==>  return 0, because the sequence is complete

// "1 2 4 3"  ==>  return 0, because the sequence is complete (order doesn't matter)

// "2 1 3 a"  ==>  return 1, because it contains a non numerical character

// "1 3 2 5"  ==>  return 4, because 4 is missing from the sequence

// "1 5"      ==>  return 2, because the sequence is missing 2, 3, 4 and 2 is the lowest


function sequ(str) {
  let arr = str.split(" ").sort().map(Number);
  if (str.length === 0) {
    return 0
  }
  console.log(arr)//[1, 2, 3, 5]
  let max = Math.max(...str);//5
  let min = 1;
  let res = [];
  while ( min <= max) {
    res.push(min);
    min += 1;
  }
  console.log(res)//[1, 2, 3, 4, 5]
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i]
    if (isNaN(current)) {
      return false
    }
    if (arr[current]) {
      res.splice(0, 1)
      console.log(res)
    }
    if (!res[current]) {
      return res[0]
    }
  }
  return false
}

console.log(sequ("1 2 4 5"))


function findMissingNumber(sequence){
  let arr= sequence.split(" ").sort().map(Number);
   if (arr.length === 0) {
    return 0
  }
  if(arr[0] !== "1") {
    return 1
    }
  let max = Math.max(...sequence);//5
  let min = 1;
  let res = [];
  while ( min <= max) {
    res.push(min);
    min += 1;
  }
  if (res.length === sequence.lenght) {
    return 0
  }
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i]
    if (isNaN(current)) {
      return 1
    }
    if (arr[current]) {
      res.splice(0, 1)
    }
    if (!res[current]) {
      return res[0]
    }
  }
}


function ro(sequence){
  let arr= sequence.split(" ").sort().map(Number);
   if (arr.length === 0) {
    return 0
  }
  if(arr[0] !== "1") {
    return 1
    }
  let max = Math.max(...sequence);//5
  let min = 1;
  let res = [];
  while ( min <= max) {
    res.push(min);
    min += 1;
  }
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i]
    if (isNaN(current)) {
      return 1
    }
    if (arr[current]) {
      res.splice(0, 1)
    }
    if (!res[current]) {
      return res[0]
    }
  }
}

console.log(ro("1 5"))
