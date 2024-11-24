import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

export const userRoutes = () => {
  router
    .group(() => {
      router.get('user', async ({ auth }) => {
        return { user: auth.getUserOrFail() }
      })
    })
    .use(middleware.auth())
}
