const express = require('express')

    /* CONTROLLERS */
const OngController = require('./controller/OngController')
const IncidentController = require('./controller/IncidentController')
const ProfileController = require('./controller/ProfileController')
const SessionController = require('./controller/SessionController')

const Route = express.Router()

Route.get('/', ( req, res )=>{
    return res.json({ resposta: "hello" })
})

Route.post('/sessions', SessionController.store)

Route.get('/ongs', OngController.index)
Route.post('/ongs', OngController.store)

Route.get('/incidents', IncidentController.index)
Route.post('/incidents', IncidentController.store)
Route.delete('/incidents/:id', IncidentController.delete)

Route.get('/profile', ProfileController.index)



module.exports = Route


