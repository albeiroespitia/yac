const db = require("../firebase");
const util = require('util');
const msgCtrl = require('../controllers/message')


function initSockets(socket){

	socket.on('sendMessage',(data)=>{
		msgCtrl.send(data)
	})

	let query = db.collection('messages')
	let observer = query.onSnapshot(querySnapshot => {
		socket.emit('allMessages',querySnapshot.docs)
	}, err => {
		console.log(`Encountered error: ${err}`);
	});
}


module.exports = initSockets
