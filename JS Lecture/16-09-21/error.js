// function myFunc() {
//     try {
//         myFunc3();
//         throw 'My Error From Function 1';
//     } catch(err) {
//         console.log("First Function Catch " , err);
//         throw err;
//     } finally {
//         console.log("finally");
//     }
// }

// function myFunc2() {
//     try {
//         myFunc(); //
//     } catch (error) {
//         //SEnd Email to My Email Id
//         console.log("Error in Function 2 ", error);
//     }
// }

// console.log(myFunc2());

//Error -> Template Error Object -> Custom Errors

// class UserError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = this.constructor.name;
//     }
// }

// class ValidationError extends UserError {
//     constructor(property) {
//         super("missing property - " + property);
//     }
// }

// class PropertyValidatinError extends ValidationError {
//     constructor(property) {
//         super(property); //message
//     }
// }

// try {
//     throw new PropertyValidatinError("name");
// } catch (err) {
//     console.log("Name" , err.name);
//     console.log("Message", err.message);
//     console.log("cause", err.cause);
// }

//Quiz Application -> Multiple Possibilities of Errors
// - NExt question Faild to load/ question not found -> QuestionNotFoundError
// - Calcualte Score Method Error -> CalculateScoreError
// - QuestionWebsiteLoadingError
//JSOn Object -> 10 fields, anyfield is missing from 10 - PropertyNotDound
// age > 20 -> INvaludaAgeerror
//QuestionError
// new Promise((resolve, reject) => {
//     resolve();
//     reject();
// })

// async function test() {
//     const arr = await getArrayData();
// }

// myFunc().promise().then((res) => ).catch((err) = >)
// Promise.resolve(arr);

// // then-catch then(() => ).catch(() => )
// Promise.reject(err);


// function doWork() {
//     console.log("hello");
//     Promise.resolve(true);
// }

// function doError() {
//     console.log("hello");
//     Promise.reject("error");
// }