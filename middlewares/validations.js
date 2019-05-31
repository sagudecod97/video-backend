const { celebrate, Joi } = require('celebrate')
const User  = require('../models/User')
const jwt = require('jsonwebtoken')
const kEY = 'QWERTY123'

module.exports = {
    
  createUserValidator: celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required()
    })
  }),
  validateToken: (req, res, next) => {
    const isToken = req.headers.authorization
    if (isToken) {
      if (isToken.startsWith('tk ')) {
        const token = isToken.slice(3, isToken.length)
        jwt.verify(token, kEY, (err, decode) => {
          if (err) {
            res.status(403).send({ message: 'Tu token no está funcionando' })
          } else {
            req.decode = decode
            next()
          }
        })
      } else {
        res.status(403).send({ message: 'Sufijo incorrecto' })
      }
    } else {
      res.status(403).send({ message: 'Necesitas un token para entrar' })
    }
  },
  isEmailExist: async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      next()
    } else {
      res.status(409).send({ message: 'Este correo electrónico ya existe' })
    }
  }
}