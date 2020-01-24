const db = require("../firebase");

async function checkNickname(req,res,next){

	try{
		const querySnapshot = await db.collection('users').where("nickname", "==", req.body.nickname).get()

		if(querySnapshot.empty){
			next()
		}else{
			res.status(409).send("Invalid")
		}

	}catch(e){
		res.status(500).send(e)
	}

}

module.exports = {
	checkNickname
}
