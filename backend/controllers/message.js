const db = require("../firebase");

async function send(req,res){
	let message = {
		message: req.body.message,
		date: new Date(),
		sender: res.locals.userData.nickname
	}

	console.log(message)

	try{
		const docRef = await db.collection('messages').doc().set(message)
		res.status(200).send(docRef)
	}catch(e){
		console.log(e	)
		res.status(500).send(e)
	}
}


module.exports = {
	send
}
