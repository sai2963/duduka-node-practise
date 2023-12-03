const http= require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        for(let i=0;i<100;i++){
            for(let j=0;j<100;j++){
                console.log(`${i},${j}`)
                res.end(`${i},${j}`)
            }
        }
        res.end('passion should be reason for success')
    }
    res.end(`
    <h1> Oops</h1>
    <p>We cant find the folder that your serching for</p>
    <a href='/'>back home</a>
    `);
})
server.listen(3000, ()=>{
    console.log ('server running')
});