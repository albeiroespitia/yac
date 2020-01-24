import { combineReducers } from 'redux'
import helpers from './helpers/reducer'
import users from './users/reducer'

export default
  combineReducers({
    helpers,
    users,
  })
