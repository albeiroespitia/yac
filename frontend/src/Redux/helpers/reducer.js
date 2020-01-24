import actions from './actions'

const initialState = {
	text: '',
	color: ''
}

export default function helperReducer(state = initialState, action) {
  switch (action.type) {
    case actions.RESET_APP:
      return initialState
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}s
