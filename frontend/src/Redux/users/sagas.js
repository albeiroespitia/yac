import { all, takeLatest, put, call } from 'redux-saga/effects'
import { login, signup } from '../../Services/Session'
import actions from './actions'

export function* LOGIN({ payload }) {
  const { nickname } = payload

  try {
    const response = yield call(login, nickname)
		const expireTime = new Date();
    expireTime.setSeconds(expireTime.getSeconds()+response.data.expire)
    document.cookie = `__tw__=${response.data.token}; expires=${expireTime};`;
  } catch (error) {
		if(error.response.status === 401){
			yield put({
				type:'helper/SNACKBAR',
				payload:{
					isSnackVisible: true,
					text: "Nickname doesn't exist, please create an account",
					color: '#d32f2f'
				}
			})
		}
  }
}

export function* SIGN_UP({ payload }) {
  const { userData, history } = payload
  try {
    yield call(signup, userData)
		history.push('/login')

		yield put({
			type:'helper/SNACKBAR',
			payload:{
				isSnackVisible: true,
				text: 'Account created, login with your nickname',
				color: '#43a047'
			}
		})

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
