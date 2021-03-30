import * as types from '../types'

const initialState = {
  something: 'meo',
  loading: false
}

export default function Example(state = initialState, action = {} ){
  switch(action.type){
    case types.FETCH_SOMETHING:
      return {
        ...state,
        something: action.payload
      }

    default:
      return {...state}
  }
}