'use strict'
const simple = require('./handlers/simple')
const configured = require('./handlers/configured')
import validate from 'express-joi-validator'
import { getUserFriendsList, getUsersList } from './controllers'
import { usersValidations } from './middlewares'

module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', simple)
  app.get('/configured', configured(opts))

  //API's route's
  app.get(
    `${process.env.API_VERSION}/users`,
    validate(usersValidations.getUsersList),
    getUsersList
  )
  app.get(
    `${process.env.API_VERSION}/users/:id/friends`,
    validate(usersValidations.getUserFriendsList),
    getUserFriendsList
  )
}
