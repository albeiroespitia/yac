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

const checkLogin = (token) => {
	return new Promise((resolve,reject)=>{
		jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
	    if(err) reject('fail')
	    db.collection('users').where("nicknameTLC", "==", decoded.nickname.toLowerCase()).get()
	  		.then(snapshot => {
	  			if (snapshot.empty) {
	  				reject('fail')
	  			}

	  			snapshot.forEach(doc => {
						resolve(doc.data())
						//return doc.data()
	        })
	      })
	      .catch(err => {
	        console.log('Error getting documents', err);
	        reject('fail')
	  		})
	  });
	})
}

/*function checkLogin(token){
  jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
    if(err) return false
    db.collection('users').where("nicknameTLC", "==", decoded.nickname.toLowerCase()).get()
  		.then(snapshot => {
  			if (snapshot.empty) {
  				return false
  			}

  			snapshot.forEach(doc => {
					console.log(doc.data())
					return doc.data()
        })
      })
      .catch(err => {
        console.log('Error getting documents', err);
        return false
  		})
  });
}*/

module.exports = {
	checkNickname,
	checkLogin
}
