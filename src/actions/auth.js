export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const handleLogin = () => ({
  type: LOGIN_USER,
  payload: true
})

export const handleLogout = () => ({
  type: LOGOUT_USER,
  payload: false
})