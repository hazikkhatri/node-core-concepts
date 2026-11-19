async function helloFunc() {
    return "hello world"
}

// (async () => {
//     await helloFunc();
// })();

(async () => {
    const result = await helloFunc();
    console.log(result);
})();