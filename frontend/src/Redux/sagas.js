import { all } from 'redux-saga/effects'
import helpers from './helpers/sagas'
import users from './users/sagas'
import messages from './messages/sagas'

export default function* rootSaga() {
  yield all([
    helpers(),
    users(),
		messages()
  ])
}
