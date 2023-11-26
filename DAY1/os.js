const os =require('os')
const user=os.machine()
console.log(user);
console.log(os.uptime());
const currentOS={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentOS.name);