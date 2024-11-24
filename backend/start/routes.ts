/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const AuthController = () => import('#controllers/auth_controller')

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    router.get('/:provider/redirect', [AuthController, 'redirect'])
    router.get('/:provider/callback', [AuthController, 'callback'])
  })
  .prefix('auth')
  .where('provider', /github/)

router
  .group(() => {
    router.get('user', async ({ auth }) => {
      return { user: auth.getUserOrFail() }
    })
  })
  .use(middleware.auth())
