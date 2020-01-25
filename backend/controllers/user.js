const db = require("../firebase");
const jwt = require('jsonwebtoken')

const maleAvatars = ['boy.svg','man.svg','man-1.svg','man-2.svg']
const femaleAvatars = ['girl.svg','girl-1.svg','girl-2.svg','girl-3.svg']

async function signup (req, res) {
  const user = {
    nickname: req.body.nickname,
    gender: req.body.gender,
		nicknameTLC: req.body.nickname.toLowerCase(),
    avatar: req.body.gender == 'male' ? (maleAvatars[Math.floor(Math.random() * 4)]) : (femaleAvatars[Math.floor(Math.random() * 4)])
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
		const querySnapshot = await db.collection('users').where("nicknameTLC", "==", user.nickname.toLowerCase()).get()
		if(querySnapshot.empty){
			res.status(401).send("Empty")
			return
		}

		const tokenData = {
			nickname: user.nickname
		}

		const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
			 expiresIn: 60 * 60 * 24
		})
		res.status(200).send({token, expire: 60 * 60 * 24})
	}catch(e){
		res.status(500).send(e)
	}
}

module.exports = {
	signup,
	login
}
