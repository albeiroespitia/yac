import { combineReducers } from 'redux'
import helpers from './helpers/reducer'
import user from './users/reducer'

export default
  combineReducers({
    helpers,
    user,
  })
