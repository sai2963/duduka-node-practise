//on :listen to an event 
//emit:emit an event


const eventemiter=require('events');

const customemiter=new eventemiter();

customemiter.on('responses',(name,age)=>{
    console.log(`data recieved name:${name} age:${age}`)
})
customemiter.emit('responses','sai',20)