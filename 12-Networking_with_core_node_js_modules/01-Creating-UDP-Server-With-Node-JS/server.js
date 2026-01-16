import dgram from 'node:dgram';

const socket = dgram.createSocket('udp4');

socket.on('message', (msg, remoteAddress) => { 
    console.log(msg.toString(), remoteAddress)
}); 

socket.bind({ port: 4000 }, () => {
    console.log('listening on', socket.address().port)
});
