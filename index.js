const dotenv = require('dotenv')
const http = require('http')
const EventEmitter = require('events')
const PORT = process.env.PORT || 5000
const Router = require('./router')
const emitter = new EventEmitter
const Application = require('./router/App')
dotenv.config()

const app = new Application()
const router = new Router()
router.get('/users', (req, res) =>{
    res.end('you send /users')
})
router.post('/posts', (req, res) =>{
    res.end('you send /posts')
})
//1'34
app.addRouter(router)
app.listen(PORT, () => console.log(router))