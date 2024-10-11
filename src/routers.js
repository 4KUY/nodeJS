const Router = require('../frame')

const router = new Router()

const users = [
    {id:1, name:'Kolay'},
    {id:2, name:'Vitaly'}
]

router.get('/users' , (req ,res)=>{
    
    res.send(users)
})
router.post('/users' , (req ,res)=>{

    res.send(users)
})

module.exports = router