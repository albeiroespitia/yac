const app = require('./app')

app.listen(process.env.PORT, ()=>{
    console.log(`Escuchando en el puerto ${process.env.PORT}...`)
})
