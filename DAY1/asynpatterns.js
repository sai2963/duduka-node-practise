const { readFile, writeFile } = require("fs").promises;
const start = async () => {
  try {
    const a = await readFile("./content/subfolder/first.txt", "utf-8");
    const b = await readFile("./content/subfolder/text.txt", "utf-8");
    await writeFile("./content/subfolder/text1.txt", `this has both ${a},${b}`);
    console.log(a, b);
  } catch (error) {
    console.log(error);
  }
};
start();
// const util=require('util')
// const readFilepromise=util.promisify(readFile);
// const writeFilepromise=util.promisify(writeFile);

// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err)
//             } else{
//                 resolve(data)
//             }

//         })
//     })
// }
