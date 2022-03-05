//global funtions already built in node
// setTimeout(() => {
//    console.log("hello there");
//    clearInterval(int);
// }, 3000);

// const int = setInterval(() =>{
//     console.log("yo bro")
// },1000);

//directory file path
// console.log(__dirname);
// //file path way
// console.log(__filename);

// const xyz = require('./people');
//import a certain obj by {properties}
// const {people,ages} = require('./people');
// console.log(people,ages)
const os = require('os');
console.log(os.platform(),os.homedir());