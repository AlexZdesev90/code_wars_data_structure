//[value, next] -> [value, next] -> null

// [].push(12)
let arr = [100, 88, 20]
arr.shift()
console.log(arr)//[88, 20]
arr.unshift(66)
console.log(arr)//[66,88,20]


class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class List {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data) {
        const node = new Node(data);

        if (this.tail) {
            this.tail.next = node
        }

        if (!this.head) {
            this.head = node
        }

        this.tail = node
  }

    prepend(data) {
        const node = new Node(data, this.head)

        this.head = node
        if (!this.tail) {
            this.tail = node
        }
    }

    insertAfter(after, data) {
        const found = this.find(after)
        
        if (!found) {
            return
        }
       found.next = new Node(data, found.next)
    }

    find(data) {
        if (!this.head) {
            return
        }
            let curr = this.head
        while (curr) {
            if (curr.data === data) {
                    return curr
            }
                curr = curr.next
            }
    }


    toArray() {
        const output = []
        let current = this.head

        while (current) {
            output.push(current)
            current = current.next
        }
        return output
    }
    remove(data) {
        if (!this.head) {
            return
        }

        while (this.head && this.head.data === data) {
            this.head = this.head.next
        }

        let current = this.head
        while (current.next) {
            if (current.next.data === data) {
                //remove
                current.next = current.next.next
            } else {
                current = current.next
            }
        }
        if (this.tail.data === data) {
            this.tail = current
        }
    }
}

const list = new List()
list.prepend("Hi")
list.append("My")
list.append("name")
// console.log(list.toArray())
// console.log(list.find("Hi"))
list.append("is")
list.append("Shady")
list.insertAfter("is", "Slim")


list.remove("Shady")

console.log(list.toArray())

//////////////////////////////////
//Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
    // return x.trim() !WRONG
    // return x.split("").filter(el => el !== " ").join("") !CORRECT
    // return x.split(" ").join("")
    return x.replace(/\s/g, '');
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));


let str = "xxx gfgdgdgd xxx gffgfhfhf"
const re = /xxx/gi
let res = str.replace(re, "so")
console.log(res)

function replace(str) {
    // return str.replace(/aaaa/gi, '')//ffsfsfsfs  ffdfdf  rtrtrtrtr aaa
    // return str.replace(/\s/gi, '')//ffsfsfsfsaaaaffdfdfaaaartrtrtrtraaaaaaaaaaaaaaaaaaaaaaa
    return str.replace(/ /g, "")//ffsfsfsfsaaaaffdfdfaaaartrtrtrtraaaaaaaaaaaaaaaaaaaaaaa
}

console.log(replace("ffsfsfsfs aaaa ffdfdf aaaa rtrtrtrtr aaaaaaaaaaaaaaaaaaaaaaa"))

////////////////////////////////////////////
//Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
    return String(num)
        .split('')
        .map(el => el * el)
        .join('');
    
    // return 0;
}
console.log(squareDigits(123))//149
  
///////////////////////////////////
function digitize(n) {
    return String(n).split('').reverse().map(el => +el)
}
  
console.log(digitize(348597))

////////////////////
function greet(name){
    // return `Hello, ${name} how are you doing today?`
    return `\x48\x65\x6c\x6c\x6f\x2c\x20${name}\x20\x68\x6f\x77\x20\x61\x72\x65\x20\x79\x6f\x75\x20\x64\x6f\x69\x6e\x67\x20\x74\x6f\x64\x61\x79\x3f   \x08`
}
  
console.log(greet("hgfgh"))

function print() {
    let str = [];
    for (let i = 12; i < 100; i++){
        let res = '\x06' + i
        str.push(res)
    }
}