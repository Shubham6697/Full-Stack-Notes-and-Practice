// let result = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         let x = 1;
//         if(x > 5) {
//             reject("X is greater than 5");
//         } else {
//             resolve("X is less than 5");
//         }
//     }, 3000);
// });

// const obj = result.then(function(onSuccess) {
//     console.log("Got the Response : ", onSuccess);
// }).catch(function(onError) {
//     console.log("Got the Error : ", onError);
// });


// async function myFunc() {
//     const res = await result;
//     console.log(res);
// }

// myFunc();