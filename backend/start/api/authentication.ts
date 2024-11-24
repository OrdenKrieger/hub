const AuthController = () => import('#controllers/auth_controller')

import router from '@adonisjs/core/services/router'

export const authenticationRoutes = () => {
  router
    .group(() => {
      router.get('/:provider/redirect', [AuthController, 'redirect'])
      router.get('/:provider/callback', [AuthController, 'callback'])
    })
    .prefix('auth')
    .where('provider', /github/)
}
