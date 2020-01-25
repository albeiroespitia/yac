const db = require("../firebase");
const jwt = require('jsonwebtoken')

async function checkNickname(req,res,next){
	try{
		const querySnapshot = await db.collection('users').where("nicknameTLC", "==", req.body.nickname.toLowerCase()).get()
		if(querySnapshot.empty){
			next()
		}else{
			res.status(409).send("Invalid")
		}

	}catch(e){
		res.status(500).send(e)
	}
}

function checkLogin(req,res, next){
  jwt.verify(req.headers.authorization, process.env.JWT_SECRET, function(err, decoded) {
    if(err) res.status(401).send(err);
    db.collection('users').where("nicknameTLC", "==", decoded.nickname.toLowerCase()).get()
  		.then(snapshot => {
  			if (snapshot.empty) {
  				return res.status(401).send(snapshot.empty)
  			}

  			snapshot.forEach(doc => {
					res.locals.userData = doc.data()
					console.log(doc.data())
					next()
        })
        return
      })
      .catch(err => {
        console.log('Error getting documents', err);
        res.status(500).send(err);
  		})
  });
}

module.exports = {
	checkNickname,
	checkLogin
}
