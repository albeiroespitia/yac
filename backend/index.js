const app = require('./app')
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const initSocket = require('./services/sockets')

io.on('connection', function(socket){
	initSocket(socket)
});

server.listen(process.env.PORT, ()=>{
    console.log(`Escuchando en el puerto ${process.env.PORT}...`)
})
