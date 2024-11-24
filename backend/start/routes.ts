/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { authenticationRoutes } from '#start/api/authentication'
import { userRoutes } from '#start/api/user'

router
  .group(() => {
    authenticationRoutes()
    userRoutes()
  })
  .prefix('api')
