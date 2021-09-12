import * as actionTypes from './actionTypes'

const startAuth = () => {
  return {
    type: actionTypes.AUTH_start,
  }
}

const authFailed = (error) => {
  return {
    type: actionTypes.AUTH_FAILED,
    error,
  }
}

const authSuccess = ({ uid, email, token }) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    uid,
    email,
    token,
  }
}

const logout = () => {
  localStorage.removeItem('idToken')
  return {
    type: actionTypes.AUTH_LOGOUT,
  }
}
