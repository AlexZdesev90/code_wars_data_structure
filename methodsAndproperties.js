let obj1 = { name: "A" }, obj2 = { age: 33}
console.log(Object.assign(obj1, obj2))

let xxx = Object.create(obj1, {
    x: {
        value: "L"
    }
})
console.log(xxx)
let obj3 = {r: "rerere"}
Object.freeze(obj3)
obj3.r = "00erere"
console.log(obj3.r)

console.log(Object.is(12, 12))//true
console.log(Object.is(12, 9131312))//false

console.log(Number.isNaN(67))//false
console.log(Number.isFinite(1/0))//false
console.log(Number.isFinite(NaN))//false
console.log(Number.isFinite(1))//true
console.log(Number.isInteger(11))//true
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Форматирование ниже предполагает, что местный часовой пояс равен
// America/Los_Angeles для локали США

// В американском английском используется порядок месяц-день-год
// и 12-часовой формат времени
console.log(date.toLocaleString('en-US'));
console.log(String.prototype.concat("as", "sa"))
console.log("saas".endsWith("as"))


var str = 'Смотри главу 3.4.5.1 для дополнительной информации';

var found = str.match(/См/gi);

console.log(found);

console.log("Hi".repeat(10))//HiHiHiHiHiHiHiHiHiHi

console.log("fsogfgfgfe".search('o'))
console.log("Hello".slice(2, 4))

console.log("fdf".split('d'))//['f','f']

console.log("oklol".charAt(1))