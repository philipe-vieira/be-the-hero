const Express = require('express')

const app = Express()

app.get('/', ( request, response )=>{
    return response.json({ resposta: "hello" })
})

app.listen(3333)