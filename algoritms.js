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
        return binaryRecursion(arr, el, start, middle - 1)
    } else {
        return binaryRecursion(arr, el, middle + 1, end)
    }
}
let arrayus = [1,2,3,4,5,6,7,8,9]
console.log(binaryRecursion(arrayus, 6, 0, arrayus.length))
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
