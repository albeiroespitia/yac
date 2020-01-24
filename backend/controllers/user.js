const db = require("../firebase");


async function signup (req, res) {
  const user = {
    nickname: req.body.nickname,
    gender: req.body.gender,
    avatar: req.body.avatar
  }

	try{
		const docRef = await db.collection('users').doc().set(user)
		res.status(200).send(docRef)
	}catch(e){
		res.status(500).send(e)
	}
}

async function login (req, res) {
  const user = {
    nickname: req.body.nickname,
  }

	try{
		const querySnapshot = await db.collection('users').where("nickname", "==", user.nickname).get()
		if(querySnapshot.empty){
			res.status(401).send("Empty")
		}
		res.status(200).send(querySnapshot.docs[0].data())
	}catch(e){
		res.status(500).send(e)
	}
}

module.exports = {
	signup,
	login
}
