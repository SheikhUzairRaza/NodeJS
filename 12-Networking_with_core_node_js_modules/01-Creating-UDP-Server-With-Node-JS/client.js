import dgram from 'node:dgram';

const socket = dgram.createSocket('udp4');

socket.send('Hi from Uzair',4000, '192.168.100.130')
