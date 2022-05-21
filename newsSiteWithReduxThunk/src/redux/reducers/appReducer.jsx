import { CLEAR_LOADING, SET_LOADING } from "../types/appTypes"

const initialState = {
    loading: false
}

export const appReducer = (state = initialState, { type }) => {
  switch (type) {

  case SET_LOADING:
    return { ...state, loading: true  }

  case CLEAR_LOADING:
    return { ...state, loading: false }

  default:
    return state
  }
}


