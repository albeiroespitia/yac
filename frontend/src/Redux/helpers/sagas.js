import { all, takeLatest, put } from 'redux-saga/effects'
import actions from './actions'

export function* SNACKBAR({ payload }) {
  const { text, color, isSnackVisible } = payload

  yield put({
		type: 'helper/SET_STATE',
		payload: {text, color, isSnackVisible},
	})
}


export default function* rootSaga() {
  yield all([
    takeLatest(actions.SNACKBAR, SNACKBAR),
  ])
}
