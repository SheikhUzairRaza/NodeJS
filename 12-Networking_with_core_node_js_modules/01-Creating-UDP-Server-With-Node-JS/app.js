import dgram from 'node:dgram';

const socket = dgram.createSocket('udp4');

// console.log(socket) // it is an EventEmitter; we can inspect it using a debugger. 
// console.log cannot show its full details, 
// which is why we can attach events to it.

socket.on('message', (msg, rinfo) => { 
    console.log(msg, rinfo)
}); // the client will send a message to this socket

// the client will also have its own socket

// now we want to start a UDP server, so let's start it

socket.on('listening', () => { 
    console.log(socket.address())
    console.log('listening')
});

socket.bind(4000, () => { 
    console.log('listening on', socket.address().port)
}); 
// if no parameters are given, a random ephemeral port is used, 
// but here we are specifying port 4000
