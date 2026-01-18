import dgram from 'node:dgram';

const socket = dgram.createSocket('udp4');

socket.on('message', (msg, remoteAddress) => {
    console.log(`${msg.toString()}`)
});

socket.send('Hi from Uzair Raza', 4000, '192.168.100.130')//when we are sending message from client to server there is no msg displaying at client side because client is only sending message to server

