import { all, takeLatest, put, call } from 'redux-saga/effects'
import { login, signup, checkLogin } from '../../Services/Session'
import { getCookie, deleteCookie } from '../../Services/Cookies'
import actions from './actions'

export function* LOGIN({ payload }) {
	yield put({type: 'user/SET_STATE',payload: {loadingRequest: true}})
  const { nickname, history } = payload

  try {
    const response = yield call(login, nickname)
		const expireTime = new Date();
    expireTime.setSeconds(expireTime.getSeconds()+response.data.expire)
    document.cookie = `__tw__=${response.data.token}; expires=${expireTime};`;
		history.push('/chat')
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
	yield put({type: 'user/SET_STATE',payload: {loadingRequest: false}})
}

export function* SIGN_UP({ payload }) {
	yield put({type: 'user/SET_STATE',payload: {loadingRequest: true}})
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
	yield put({type: 'user/SET_STATE',payload: {loadingRequest: false}})
}

export function* LOGOUT() {
  //deleteCookie("__tw__")
  yield put({ type: 'user/RESET_APP' })
}

function* getActualSession(){
  const token = getCookie("__tw__");
  if(token != null){
    try{
      const response = yield call(checkLogin, token)
      const data = response.userData
      yield put({
        type: 'user/SET_STATE',
        payload: {
          nickname: data.nickname,
          gender: data.gender,
					avatar: data.avatar,
          isLogged: true,
        },
      })
    }catch(e){
      deleteCookie("__tw__")
    }
  }
}

export default function* rootSaga() {
  yield all([
		getActualSession(),
    takeLatest(actions.LOGIN, LOGIN),
    takeLatest(actions.SIGN_UP, SIGN_UP),
  ])
}
