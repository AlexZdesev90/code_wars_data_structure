//сложность алгоритма O(log2n) , O(n) ....

//1)Линейный поиск

function linearSeatch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      return i;
    }
  }
  return null;
}

console.log(linearSeatch([12, 13, 14, 15, 16, 23, 45, 56, 45], 56));
//2)Бинарный поиск !!если массив отсортирован
function binarySearch(arr, el) {
  //     let start = 0;
  //     let end = arr.length;
  //     let found = false;
  //     let middle;
  //     let position = -1;
  //     while (found === false && start <= end) {
  //         middle = Math.floor((end + start) / 2);
  //         if (arr[middle] === el) {
  //             found = true
  //             position = middle;
  //             return position;
  //         }
  //         if (el < arr[middle]) {
  //             end = middle - 1
  //         } else {
  //             start = middle + 1
  //         }
  //     }
  //     return position
}

function binaryRecursion(arr, el, start, end) {
  middle = Math.floor((end + start) / 2);
  if (arr[middle] === el) {
    return middle;
  }
  if (el < arr[middle]) {
    return binaryRecursion(arr, el, start, middle - 1);
  } else {
    return binaryRecursion(arr, el, middle + 1, end);
  }
}
let arrayus = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binaryRecursion(arrayus, 6, 0, arrayus.length));
// console.log(
//   binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 13)
// );

//1) сортировка алгоритмом выбора
//[11, 2, 34, 5, 8, 1] ->
function sortChoice(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[minIndex] > arr[k]) {
        minIndex = k;
      }
    }
    let tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
  }
  return arr;
}

console.log(sortChoice([11, 29, 34, 5, 8, 1]));

//2) сортировка пузырьком

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] > arr[k + 1]) {
        let tmp = arr[k + 1];
        arr[k + 1] = arr[k];
        arr[k] = tmp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([11, 29, 34, 5, 8, 1]));

//////1+1+2+3+5+8+13+21
function fiboNachi(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fiboNachi(n - 1) + fiboNachi(n - 2);
}

console.log(fiboNachi(8));

///3)БЫСТРАЯ CОРТИРОВКА

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    if (arr[i] > pivot) {
      greater.push(arr[i]);
    } else {
      less.push(arr[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort([12, 34, 5, 2, 4, 123, 23, 1, 8]));

//repeat
//1)линейный поиск
//2)бинарный поиск
//3)бинарный поиск рекурсией
//1)сортировка выбором
//2)сортирровка пузырьком
//3)быстрая сортировка

//1)
function one(array, element) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
      return index;
    }
  }
  return null;
}

console.log(one([12, 23, 56, 77, 85, 32], 77)); //3

function two(arr, el) {
  let start = 0;
  let end = arr.length - 1;
  let found = false;
  let middle;
  while (!found && start <= end) {
    middle = Math.floor((end + start) / 2);
    if (arr[middle] === el) {
      found = true;
      return middle;
    }
    if (arr[middle] > el) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return "not found";
}

console.log(two([12, 23, 56, 77, 85, 100, 32], 100)); //5
console.log(two([12, 23, 56, 77, 85, 100, 32], 120)); //not found

function three(arr, el, start, end) {
  let middle = Math.floor((start + end) / 2);
  if (arr[middle] === el) {
    return middle;
  }
  if (arr[middle] > el) {
    return three(arr, el, start, middle - 1);
  } else {
    return three(arr, el, middle + 1, end);
  }
}
let arRAY = [12, 23, 56, 77, 85, 100, 32];
console.log(three(arRAY, 77, 0, arRAY.length)); //3
console.log(three(arRAY, 100, 0, arRAY.length)); //5

function four(arr) {
  for (let index = 0; index < arr.length; index++) {
    let indexMin = index;
    for (let kindex = index + 1; kindex < arr.length; kindex++) {
      if (arr[indexMin] > arr[kindex]) {
        indexMin = kindex;
      }
    }
    let tmp = arr[index];
    arr[index] = arr[indexMin];
    arr[indexMin] = tmp;
  }
  return arr;
}

console.log(four([11, 14, 17, 33, 12, 1, 5, 3, 78]));

function five(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] > arr[k + 1]) {
        let tmp = arr[k + 1];
        arr[k + 1] = arr[k];
        arr[k] = tmp;
      }
    }
  }
  return arr;
}
console.log(five([12, 45, 78, 14, 67, 4, 88, 3]));

function six(arr) {
  if (arr.length <= 0) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < arr.length; i++) {
    if (pivotIndex === i) {
      //!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      continue;
    }
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return [...six(less), pivot, ...six(greater)];
}

console.log(six([11, 23, 56, 78, 3, 44, 33, 12]));

//7)графы поик в ширину

const Ggraph = {};
Ggraph.a = ["b", "c"];
Ggraph.b = ["d"];
Ggraph.c = ["e"];
Ggraph.d = ["f", "m"];
Ggraph.e = ["o"];
Ggraph.f = [];

function seven(graph, start, end) {
  let queue = [];
  queue.push(start);
  while (queue.length > 0) {
    let current = queue.shift();
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
      console.log(queue);
    }
  }
  return false;
}

console.log(seven(Ggraph, "a", "n"));

///
//кэширование

function cashFunct(fn) {
  let cash = {};
  return function (n) {
    if (cash[n]) {
      console.log("from cash");
      return cash[n];
    }
    let res = fn(n);
    cash[n] = res;
    console.log("new res");
    return res;
  };
}

function factorialus(n) {
  let res = 1;
  while (n != 1) {
    res *= n;
    n -= 1;
  }
  return res;
}

console.log(factorialus(5));

let resCash = cashFunct(factorialus);
console.log(resCash(4));
console.log(resCash(5));
console.log(resCash(4));
console.log(resCash(6));
console.log(resCash(6));

/////
function cashF(fnctn) {
  const cash = {};
  return function (n) {
    if (cash[n]) {
      console.log("from cash");
      return cash[n];
    } else {
      if (!cash[n]) {
        let res = fnctn(n);
        console.log("new result");
        cash[n] = res;
        return res;
      }
    }
  };
}

function mult2(n) {
  return n * n;
}

const resF = cashF(mult2);
console.log(resF(3));
console.log(resF(5));
console.log(resF(7));
console.log(resF(5));
console.log(resF(2));

//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validateStr(str) {
  let res = str.split("");
  if (res.length !== 4 && res.length !== 6) {
    return false;
  }
  for (let i = 0; i < res.length; i++) {
    if (isNaN(res[i])) {
      return false;
    }
  }
  return true;
}

console.log(validateStr("1234")); //t
console.log(validateStr("12345")); //f
console.log(validateStr("a234")); //f
console.log(validateStr("12345j")); //f

console.log(isNaN("a")); //true
console.log(isNaN(1)); //false

//Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function count(str) {
  let resStr = str.split(" ");
  console.log(resStr);
  let arro = {};
  let current = null;
  for (let i = 0; i < resStr.length; i++) {
    current = resStr[i];
    // console.log(current);
    // console.log(current.split(""));
    let numberArr = current.split("").reduce((a, c) => {
      let rez = 0;
      rez = c.charCodeAt(0) - 96;
      return (a += rez);
    }, 0);

    arro[current] = numberArr;
  }
  return Object.entries(arro).sort((a, b) => b[1] - a[1])[0][0];
}

console.log(count("dfdfd fd ea"));
console.log(count("ab acxxxxxygu aa af fjka"));

function number(x) {
  return x.charCodeAt(0) - 96;
}

console.log(number("b fdge dddgfg")); //2

//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function summ(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      return;
    }
    if (Math.round(arr[i]) !== arr[i]) {
      return;
    }
  }
  if (arr.length < 4) {
    return;
  }
  let resu = arr.sort((a, b) => a - b);
  return resu[0] + resu[1];
}

console.log(summ([12, 34, 3, 3]));
////////////////////////////////////////////
function check(a, x) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    }
  }
  return false;
}

console.log(check([12, 45, "fdg", "oo"], "oou"));
//////////////////

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
function oddOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      for (let k = i + 1; k < arr.length; k++) {
        if (arr[k] % 2) {
          let tmp = arr[i];
          arr[i] = arr[k];
          arr[k] = tmp;
        }
      }
    }
  }
  return arr;
}

console.log(oddOdd([1, 2, 4, 5]));
console.log(oddOdd([1, 2, 3, 7, 4, 5]));
console.log(oddOdd([1, 2, 5]));

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(arr) {
  return arr.filter(el => typeof el !== 'string')
}

console.log(filter_list([12, 'fd', 45]))

///The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages.If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function dupl(str) {
  let newS = [];
  let obje = {};
  for (let i = 0; i < str.length; i++){
    let curr = str[i]
    if (obje[curr]) {
      obje[curr]++
    } else {
      obje[curr] = 1
    }
  }
  console.log(obje)
  for (let k = 0; k < str.length; k++){
    if (obje[str[k]] > 1) {
      newS.push('(')
    } else {
      newS.push(')')
    }
  }
  
return newS.join('')
}
console.log(dupl("fefrrgt"))


////////You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

// For example:

// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.
//....
// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.