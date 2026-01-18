import dgram from 'node:dgram'

const socket = dgram.createSocket('udp4')

socket.on('message', (msg, remoteAddress) => {
  console.log(msg.toString())
  socket.send(
    `msg received successfully on server from ${remoteAddress.address}:${remoteAddress.port}`,
    remoteAddress.port,
    remoteAddress.address
  )
})

socket.bind({ port: 4000, address: '192.168.100.130' }, () => {
  console.log('listening on', socket.address().port)
})
