//files managment

const fs = require('fs');
//reading files

// fs.readFile('./docs/blog.txt',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data.toString());
// });
// console.log("last line")


//writing files


// fs.writeFile('./docs/blog.txt','yashwanth has edited this doc',()=>{
//     console.log("this file is over written a while ago")
// })
//if it is changed to /blog2.txt since there is no such file it will create a file

//directories

//if doesnt exit create that folder this means
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (err) => {
//         if (err) {
//             console.log(err)
//         }
//         console.log("a dic is created")
//     })
// }else{
//     fs.rmdir('./assets',(err)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log("file is deleted beacuse it was already existing")
//     })
// }
//if you you run it twice it willgive a error because that dic exists now
//to make sure that we can use this snippet inside .existsync function
//ok now we will and else case that is to remove if exist



//deleting files
//before using this there should be a file of such so
if(fs.existsSync('./docs/blog.txt')){
    fs.unlink('./docs/blog.txt',(err)=>{
        if(err){
            console.log(err)
        }
        console.log("file is deleted")
    })
}
