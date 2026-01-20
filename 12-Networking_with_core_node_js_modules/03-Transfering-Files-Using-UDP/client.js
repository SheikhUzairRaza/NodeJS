import dgram from 'node:dgram'
import { createReadStream, statSync } from 'node:fs'
let lastPrintedPercent = 0
const clientSocket = dgram.createSocket('udp4')
const fileSize = statSync('C:\\Users\\PMLS\\Desktop\\numbers.txt').size
const content = createReadStream(
  'C:\\Users\\PMLS\\Desktop\\numbers.txt',
  { highWaterMark: 1000 }, // stay under UDP payload limit
)

clientSocket.send(fileSize + '', 4000, '192.168.100.130')
clientSocket.on('message', (msg, rinfo) => {
  console.log(msg.toString())
})
content.on('data', (chunk) => {
    const percent = Math.floor((content.bytesRead / fileSize) * 100)

    if (percent > lastPrintedPercent) {  // only print on next 1% increment
      lastPrintedPercent = percent
      console.log(`File Read: ${percent}%`)
    }

  clientSocket.send(chunk, 4000, '192.168.100.130', () => {
    content.resume()
    
    })
  }
)

content.on('end', () => {
  clientSocket.send('EOF', 4000, '192.168.100.130', () => {
    clientSocket.close()
  })
})
