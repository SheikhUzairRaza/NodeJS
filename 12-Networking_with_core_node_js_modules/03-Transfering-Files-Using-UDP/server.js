import dgram from 'node:dgram'
import { createWriteStream } from 'node:fs'

const serverSocket = dgram.createSocket('udp4')
const writeStream = createWriteStream('numbers_received.txt')
let isFileSize = true
let fileSize = ''
serverSocket.on('message', (msg, remoteAddress) => {
  // console.log(msg.toString())
  if (isFileSize) {
    fileSize = msg.toString()
    console.log(fileSize)
    isFileSize = false
    return
  } else {
    if (msg.toString() === 'EOF') {
      writeStream.end()
      serverSocket.send(
        'content received successfully on server',
        remoteAddress.port,
        remoteAddress.address,
      )
      serverSocket.close()
    }
    else {
      const isEmptyIB = writeStream.write(msg)
      if (!isEmptyIB) {
        serverSocket.pause?.()
        writeStream.once('drain', () => {
          serverSocket.resume?.()
        })
      }
    
    }
  }
})

serverSocket.bind(4000, '192.168.100.130')
