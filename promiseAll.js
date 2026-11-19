const arr = [];

const saveToDB = async (data) => {
    const promiseSaved = data.map(async (e) => {
        arr.push(e)
    })
    await Promise.all(promiseSaved)
    console.log("data saved");
}

// const saveToDB = async (data) => {
//     await data.forEach(e => {
//         arr.push(e)
//     });
//     console.log("data saved");
// }
const myNum = [1, 2, 4, 5, 6];
saveToDB(myNum)
