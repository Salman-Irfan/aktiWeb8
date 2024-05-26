console.log(document)
const textRed300 = document.getElementsByClassName(`text-red-300`)
console.log(textRed300[1])

const querySel = document.querySelectorAll(`.text-red-300`)
console.log(querySel[0])

// array k mashoor o maroof methods
// insertion and deletion from last
const bilalMarks = [12, 18, 4, 5, 6, 87]
console.log(bilalMarks)
bilalMarks.push(65)
console.log(bilalMarks)

const arrayOfFruits = [`mango`, `strawberry`, `apple`, `leechi`, `falsa`, `tarbooz`, `bhindi`]
console.log(arrayOfFruits)
const mjyKyuNikala =  arrayOfFruits.pop()
console.log(mjyKyuNikala)
console.log(arrayOfFruits)

// insert and deletions from start
const arrayOfSabzis = [`bhindi`, `karelay`, `bengan`, `aalo`, `adrak`]
console.log(arrayOfSabzis)
arrayOfSabzis.unshift(`piyaaz`)
console.log(arrayOfSabzis)
const mjyStartSyKyuNikala = arrayOfSabzis.shift()
console.log(mjyStartSyKyuNikala)
console.log(arrayOfSabzis)

// insertions and deletions hamari marzi ki jga sy
const bilalFriends = [`faizan`, `anas`, `zeeshan`, `abdullah`]
// bilalFriends.splice(1,0,`shabana`, `nasreen`)
// console.log(bilalFriends)
bilalFriends.splice(1,2, `rizwan`, `talha`)
console.log(bilalFriends)

