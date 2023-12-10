const {createReadStream}  =require('fs');

const Stream=createReadStream('./content/subfolder/four.txt',{highWaterMark:90000,encoding:'utf8'});


Stream.on('data',(result)=>{
    console.log(result)
})