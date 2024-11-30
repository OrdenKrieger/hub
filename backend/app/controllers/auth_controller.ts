import User from '#models/user'
import env from '#start/env'

import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  static callbackRedirect = env.get('APP_FRONTEND_URL')

  async redirect({ params, ally }: HttpContext) {
    return { redirect: await ally.use(params.provider).redirectUrl() }
  }

  async callback({ params, ally, auth, response }: HttpContext) {
    const socialProvider = await ally.use(params.provider)

    // User has denied access by canceling login flow
    if (socialProvider.accessDenied()) {
      return 'You have cancelled the login process'
    }

    // OAuth state verification failed, CSRF cookie gets expired
    if (socialProvider.stateMisMatch()) {
      return 'We are unable to verify the request. Please try again'
    }

    // Provider responded with some error
    if (socialProvider.hasError()) {
      return socialProvider.getError()
    }

    // Access provider user info
    const socialUser = await socialProvider.user()

    const user = await User.firstOrCreate(
      {
        email: socialUser.email,
      },
      {
        name: socialUser.name,
        nickName: socialUser.nickName,
      }
    )

    // Login user
    await auth.use('api').login(user)

    response.redirect(AuthController.callbackRedirect)
  }
}
