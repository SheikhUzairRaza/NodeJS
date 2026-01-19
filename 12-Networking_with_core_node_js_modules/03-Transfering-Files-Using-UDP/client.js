import dgram from 'node:dgram'
import { readFile } from 'node:fs/promises'

const clientSocket = dgram.createSocket('udp4')
clientSocket.on('message', (msg, remoteAddress) => {
  console.log(msg.toString(), remoteAddress.port, remoteAddress.address)
})

const content = await readFile(`C:\\Users\\PMLS\\Desktop\\num.txt`, 'utf-8')
clientSocket.send(content, 4000, '192.168.100.130')
