import actions from './actions'

const initialState = {
	allMessages: []
}

export default function messageReducer(state = initialState, action) {
	console.log(action)
  switch (action.type) {
    case actions.RESET_APP:
      return initialState
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
