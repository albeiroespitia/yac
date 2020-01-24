import { all } from 'redux-saga/effects'
import helpers from './helpers/sagas'

export default function* rootSaga() {
  yield all([
    helpers(),
    //customer(),
    //book()
  ])
}
