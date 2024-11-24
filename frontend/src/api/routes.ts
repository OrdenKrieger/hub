// Resolve base url from env else use relative
const BASE_URL = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : '/backend/'

// API versioning
const API_BASE = 'api/'
const API_VERSION = ''
const API_URL = BASE_URL + API_BASE + API_VERSION

// Supported auth routes
export const AUTH_ROUTES = {
  prefix: 'auth/',
  redirect: {
    method: 'get',
    route: (provider: 'github' | 'google' | 'facebook') => {
      return `${API_URL}/${AUTH_ROUTES.prefix}/${provider}/redirect`
    },
  },
}

// Supported user routes
export const USER_ROUTES = {
  user: {
    method: 'get',
    route: API_URL + 'user',
  },
}
