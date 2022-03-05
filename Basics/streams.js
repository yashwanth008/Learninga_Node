//so its hard to handle files if there are many so we can use streams and buffers
//we will send the data from our code to browser in streams in forms of small packets 
//called buffer once the buffers fills out you can send the data eg how the 
//neflix loads its videos in chunks instead of loading the whole movie at a time

const fs = require('fs')

//two things read stream and write streams

//read streams\
//creating a stream b2.txt 
const readstream = fs.createReadStream('./docs/b2.text',{encoding:'utf-8'});
const writestream = fs.createWriteStream('./docs/b3.text')
//on is a eventlistener,so every time we get a chunk of data(data here) we will the callback function
// readstream.on('data',(chunk)=>{
//     console.log("--new chuck--");
//     //to convert this to readable format we can use .toString method but in creatstream we have an optional parameter
//     //which is encoidng which will directly convert the data to readable format
//     console.log(chunk);
//     writestream.write('\n New Chunk\n');
//     writestream.write(chunk);
// })
//here we readstream and wrote it to a new file like pasted it as new chunk but now
//there is a easier way to do this which is a line of code to do the same thing

//this concept is piping
readstream.pipe(writestream);//does the same thing as above
