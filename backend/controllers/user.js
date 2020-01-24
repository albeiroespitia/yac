const db = require("../firebase");


async function signup (req, res) {
  const user = {
    nickname: req.body.nickname,
    gender: req.body.gender,
    avatar: req.body.avatar
  }

	try{
		const docRef = await db.collection('users').doc().set(user)
		console.log(docRef)
		res.status(200).send(docRef)
	}catch(e){
		res.status(500).send(e)
	}
}

module.exports = {
	signup
}
