import { all, takeLatest, put, call } from 'redux-saga/effects'
import { login, signup } from '../../services/Session'
import actions from './actions'

export function* LOGIN({ payload }) {
  const { nickname } = payload

  try {
    const response = yield call(login, email, password)

	  yield put({
			type: 'session/SET_STATE',
			payload: {
				userId: response.userId,
			},
		})
  } catch (error) {  // If login failed
	// Implement your error logic
  }
}

export function* SIGN_UP({ payload }) {
  const { userData } = payload
  try {
    yield call(signup, userData)

  } catch (error) { // If signup failed
		console.log(error)
    // Implement your error logic
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(actions.LOGIN, LOGIN),
    takeLatest(actions.SIGN_UP, SIGN_UP),
  ])
}
