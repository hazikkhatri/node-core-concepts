const bufMem = Buffer.alloc(10);
console.log(bufMem);


const bufFrom = Buffer.from("hello world");

console.log(bufFrom);
console.log(bufFrom.toString());


// const obj = {
//     name: "hazik",
//     greet() {
//         return `hello ${this.name}`;
//     }
// }

// const myobj = obj.greet()
// console.log(myobj);