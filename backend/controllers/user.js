const { admin } = require("../firebase");
const db = admin.database()


function signup (req, res) {
/*  const user = new User({
    email: req.body.email,
    displayName: req.body.displayName,
    password: req.body.password
  })

  user.save((err) => {
    if (err) return res.status(500).send({ message: `Error al crear el usuario: ${err}` })

    return res.status(201).send({ token: service.createToken(user) })
  })*/
}

module.exports = {
	signup
}
