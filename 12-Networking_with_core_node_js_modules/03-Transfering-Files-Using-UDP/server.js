import dgram from 'node:dgram'
import { appendFile, writeFile } from 'node:fs/promises'
const serverSocket = dgram.createSocket('udp4')

await writeFile(`./num_received.txt`, '')
serverSocket.on('message', async (msg, remoteAddress) => {
    console.log(msg.toString())
    serverSocket.send(
      
    'content received successfully on server',
    remoteAddress.port,
    remoteAddress.address,
  )
  await appendFile(`./num_received.txt`, msg)

})

serverSocket.bind(4000, '192.168.100.130')
