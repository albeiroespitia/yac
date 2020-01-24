const app = require('./app')
const config = require('./config')

app.listen(config.port, ()=>{
    console.log(`Escuchando en el puerto ${config.port}...`)
})
