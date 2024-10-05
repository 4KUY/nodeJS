const dotenv = require('dotenv')
const http = require('http')

dotenv.config()
const PORT = process.env.PORT || 5000

class Router {
    constructor(){
        this.endpoint = {}
    }
    request(method = "GET" , path , handler){
        
    }
}


const server = http.createServer((req, res)=>{
    const data = {
        description: "Z",
        evvv:"data",
    }
    res.writeHead(200, {
        'Content-type': 'application/json'
    })
    
    res.end(JSON.stringify(data))
    
})

server.listen(PORT, () => console.log(`server start ${PORT}`))