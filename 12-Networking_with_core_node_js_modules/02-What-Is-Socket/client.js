import dgram from 'node:dgram';

const client = dgram.createSocket('udp4');

client.send(
  'hello from other laptop',
  4000,
  '192.168.100.180', 
  () => {
    console.log('packet sent');
  }
);

client.on('message', (msg) => {
  console.log('Server reply:', msg.toString());
  client.close();
});
