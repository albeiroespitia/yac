import { all, takeLatest, call } from 'redux-saga/effects'
import actions from './actions'
import { getCookie } from '../../Services/Cookies'
import io from 'socket.io-client';
import store from '../store'
let socket;

function connect() {
  const socket = io(process.env.REACT_APP_SOCKET_URL);
  return new Promise(resolve => {
    socket.on('connect', () => {

			socket.on('allMessages', async function (messages) {
				let tempArr = []
				for(let i=0;i<messages.length;i++){
					tempArr[i] = {
						avatar: messages[i]._fieldsProto.avatar.stringValue,
						message: messages[i]._fieldsProto.message.stringValue,
						sender: messages[i]._fieldsProto.sender.stringValue,
						date: new Date(messages[i]._fieldsProto.date.timestampValue.seconds*1000)
					}
				}

				tempArr.sort(function(a,b){
				  return a.date - b.date;
				});

				store.dispatch({
					type: 'message/SET_STATE',
					payload: {allMessages: tempArr}
				})
			})

      resolve(socket);
    });
  });
}

function* initSockets(){
	socket = yield call(connect);
}

export function* SEND({ payload }) {
  const { message } = payload
	socket.emit('sendMessage', { message, __tw__: getCookie("__tw__") });
}


export default function* rootSaga() {
  yield all([
		initSockets(),
    takeLatest(actions.SEND, SEND),
  ])
}
