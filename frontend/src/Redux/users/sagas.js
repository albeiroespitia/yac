import { all, takeLatest, put, call } from 'redux-saga/effects'
import { login, signup } from '../../Services/Session'
import actions from './actions'

export function* LOGIN({ payload }) {
  const { nickname } = payload

  try {
    const response = yield call(login, nickname)

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

  } catch (error) {
		if(error.response.status === 409){
			yield put({
				type:'helper/SNACKBAR',
				payload:{
					isSnackVisible: true,
					text: 'Nickname already taken',
					color: '#d32f2f'
				}
			})
		}
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(actions.LOGIN, LOGIN),
    takeLatest(actions.SIGN_UP, SIGN_UP),
  ])
}
