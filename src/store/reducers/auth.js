import * as actionType from '../actions/actionTypes'

const initialState = {
  uid: null,
  token: null,
  email: null,
  loading: false,
  error: null,
  authRedirectPath: '/',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.AUTH_START:
      return { ...state, loading: true }
    case actionType.AUTH_SUCCESS:
      return {
        ...state,
        uid: action.uid,
        token: action.token,
        email: action.email,
        loading: false,
      }
    case actionType.AUTH_FAILED:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    case actionType.AUTH_LOGOUT:
      return {
        ...state,
        uid: null,
        token: null,
        email: null,
      }
    default:
      return state
  }
}

export default reducer
