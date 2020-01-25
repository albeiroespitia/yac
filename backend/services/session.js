const db = require("../firebase");
const jwt = require('jsonwebtoken')

function checkLogin(req,res){
  jwt.verify(req.headers.authorization, process.env.JWT_SECRET, function(err, decoded) {
    if(err) res.status(401).send(err);
    db.collection('users').where("nicknameTLC", "==", decoded.nickname.toLowerCase()).get()
  		.then(snapshot => {
  			if (snapshot.empty) {
  				return res.status(401).send(snapshot.empty)
  			}

  			snapshot.forEach(doc => {
          return res.status(200).send({userData: doc.data()});
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
	checkLogin
}
