import { combineReducers } from 'redux'
import helpers from './helpers/reducer'
import user from './users/reducer'
import messages from './messages/reducer'

export default
  combineReducers({
    helpers,
    user,
		messages
  })
