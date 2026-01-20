import dgram from 'node:dgram'
import { createReadStream } from 'node:fs'

const clientSocket = dgram.createSocket('udp4')
const content = createReadStream(
  'C:\\Users\\PMLS\\Desktop\\numbers.txt',
  { highWaterMark: 1000 } // stay under UDP payload limit
)

clientSocket.on('message', (msg, rinfo) => {
  console.log(msg.toString())
})

content.on('data', (chunk) => {
  content.pause()
  clientSocket.send(chunk, 4000, '192.168.100.130', () => {
    content.resume()
  })
})

content.on('end', () => {
  clientSocket.send('EOF', 4000, '192.168.100.130', () => {
    clientSocket.close()
  })
})
