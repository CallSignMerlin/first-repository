let firstName = "cody";
let r = firstName.charAt(2)
console.log(r)
var window
firstName


let a = [
    "apple",
    "pear",
    "banana",
    "grapes"
];

// let b  =  a.filter(f => f.startsWith("g"));

// a.forEach(function (fruit, i, c) {
//     fruit = fruit + " is yummy";
//     c[i] = fruit;
//     console.log(fruit, i, c);
// });

// console.log(a, b);

let o = [
    { firstName: "Robert", age: 52},
    { firstName: "Cody", age: 33},
    { firstName: "Willow", age: 17},
];

console.log(o);

o.forEach((x) => {
    if(x.age > 50) {
        console.log(x.firstName + " is old!");
        x.isOld = true;
    }
})

console.log(o)

let sum = o.reduce((a, b) =>  a.age + b.age);
console.log(sum);