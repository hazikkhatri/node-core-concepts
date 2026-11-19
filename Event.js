console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

process.nextTick(() => console.log("nextTick"));

console.log("end");


for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
    // console.log(i);
    
}