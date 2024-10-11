const PORT = process.env.PORT || 5000
const userRouter = require('./src/routers')
const Application = require('./frame/App')
const jsonParser = require('./frame/middleware/parserJson')
const app = new Application()

app.use(jsonParser)
app.addRouter(userRouter)
app.listen(PORT, () => console.log(userRouter))