const http = require('http')
const EventEmitter = require('events')
module.exports = class Application {
    constructor(){
        this.server = this._createServer()
        this.emitter = new EventEmitter()
    }
    listen(port, callback){
        this.server.listen(port,callback)
    }
    addRouter(router) {
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoints[path];
            Object.keys(endpoint).forEach((method) => {
                this.emitter.on(`[${path}:${method}]`, (req, res) => {
                    const handler = endpoint[method];
                    handler(req, res)
                })
            })
        })
    }
    
    _createServer(){
        return http.createServer((req, res)=>{
            const emmited = this.emitter.emit(`[${req.url}:${req.method}]`, req, res )
            
            if(!emmited){
                res.end(`${emmited}`)
            }
        })
    }
}