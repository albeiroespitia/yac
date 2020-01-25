import { all, takeLatest, put, call } from 'redux-saga/effects'
import { sendMessage } from '../../Services/Messages'
import actions from './actions'

export function* SEND({ payload }) {
  const { message, history } = payload
  try {
    yield call(sendMessage, message)

  } catch (error) {
		if(error.response.status === 401){
			history.push('/login')
		}
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(actions.SEND, SEND),
  ])
}
