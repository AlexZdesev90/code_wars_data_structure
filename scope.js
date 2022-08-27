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
  console.log(arr)//[1, 2, 4]
  let max = Math.max(...arr);//5
  let min = Math.min(...arr);
  console.log(min)
  let res = [];
  while ( min <= max) {
    res.push(min);
    min += 1;
  }
  console.log(res)//[1, 2, 3, 4]
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i]
    console.log(typeof current)
    if (typeof current === NaN) {
      return false
    }
    if (res.includes(current) === false) {
      return current
    }
    if (res.includes(current)) {
      res.splice(0, 1)
      console.log(arr)
    
    }
  }
  return false
}

console.log(sequ("1 a 2 4"))


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
 let max = Math.max(...str.split(" "))
  let min = Math.min(...str.split(" "))
  return max + " " + min
}
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"


var number = function(busStops){ //([[10,0],[3,5],[5,8]]),5
  let count = 0;
  for (let i = 0; i < busStops.length; i++){
    let currentStop = busStops[i]
    count += currentStop[0]
    count -= currentStop[1]
  }
  return count
}

// console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))

///
function sumMix(x){
  let res = 0;
  for(let curr of x){
    if(typeof curr === 'string'){
      res += Number(curr)
    }else{
      res += curr
    }
  }
  return res
}

const sumMixo = (xii) =>
//   // let res = 0;
//   // x.map(el => res += (typeof el === 'string') ? +el : el)
//   // return res

  xii.reduce((a,c)=>a+(+c),0)



// const sumMMix = (arr) => arr.reduce((sum, n) => sum + (+n), 0);

console.log(sumMixo([9, 3, '7', '3']))