import net from 'node:net';

const server = net.createServer()

server.on('listening', () => { 
    console.log(`Server started listening on port 4000`)
})
server.listen(4000);