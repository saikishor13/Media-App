const JSONserver = require('json-server')
const MPserver = JSONserver.create()
const router = JSONserver.router('db.json')
const middleware = JSONserver.defaults()

const PORT = 3000 || process.env.PORT

MPserver.use(middleware)
MPserver.use(router)


MPserver.listen(PORT,() => {
    console.log((`server running ${PORT}`));
})