import * as types from '../types'

export const doSomething = (params) => {
  return dispatch => {
    dispatch({
      type: types.FETCH_SOMETHING,
      payload: params
    })
  }
}