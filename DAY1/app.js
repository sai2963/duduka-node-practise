const {readFile}=require('fs')
const getText=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
            } else{
                resolve(data)
            }
        })
    })
}
const start =async()=>{
    try{
    const a = await getText('./content/subfolder/first.txt')
    console.log(a);
    }
    catch (error){
        console.log(error)
    }
}
start()