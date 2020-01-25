const db = require("../firebase");
const mdlw = require('../middleware')

async function send(data){
	try{
		const userData = await mdlw.checkLogin(data.__tw__)
		let message = {
			message: data.message,
			date: new Date(),
			sender: userData.nickname
		}

		try{
			const docRef = await db.collection('messages').doc().set(message)
		}catch(e){
			console.log(e)
			return false
		}
	}catch(e){
		return false
	}
}


module.exports = {
	send
}
