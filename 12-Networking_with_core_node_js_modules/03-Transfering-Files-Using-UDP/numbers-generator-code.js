import { writeFile, appendFile } from 'node:fs/promises'
await writeFile('C:\\Users\\PMLS\\Desktop\\numbers.txt', '1' + ',') // start with 1
let i = 2 // number, not string
while (i <= 100000) {
  await appendFile('C:\\Users\\PMLS\\Desktop\\numbers.txt', i + ',')
  i++
}
console.log('Done appending numbers!')
