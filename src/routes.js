const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

    /* CONTROLLERS */
const OngController = require('./controller/OngController')
const IncidentController = require('./controller/IncidentController')
const ProfileController = require('./controller/ProfileController')
const SessionController = require('./controller/SessionController')

const Route = express.Router()

Route.get('/', ( req, res )=>{
    return res.json({ resposta: "hello" })
})

    // LOGIN
Route.post('/sessions', celebrate({ 
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    }) 
}),  SessionController.store)

    // ONG'S ENTITY
Route.get('/ongs', OngController.index)
Route.post('/ongs', celebrate({ 
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    }) 
}), OngController.store)

    // INCIDENT'S ENTITY
Route.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
}), IncidentController.index)
Route.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    })
}), IncidentController.store)
Route.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
}), IncidentController.delete)

    // LIST'S ENTITT
Route.get('/profile',celebrate({ 
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index)



module.exports = Route


