import { all } from 'redux-saga/effects'
import helpers from './helpers/sagas'
import users from './users/sagas'

export default function* rootSaga() {
  yield all([
    helpers(),
    users(),
  ])
}
