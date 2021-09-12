import * as actionTypes from '../actions/actionTypes'

const initialState = {
  productList: [],
  loading: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LIST_REQUEST:
      return { ...state, loading: true }
    case actionTypes.PRODUCT_LIST_SUCCESS:
      return { ...state, productList: action.productList, loading: false }
    case actionTypes.PRODUCT_LIST_FAILED:
      return { ...state, loading: false }
    default:
      return state
  }
}

export default reducer
