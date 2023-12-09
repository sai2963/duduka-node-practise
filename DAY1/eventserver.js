const http =require('http')
const server =http.createServer();
server.on('request' ,(req,res)=>{
    if(req.url=='/'){
        res.end('welcome')
    }
    res.end('hiiiiii')
    
})
server.listen(5000,()=>{
    console.log('Server Running')
})