console.log(4 * 2)

// data store RAM
let a = 4 + 2
const b = 6 - 2
var c = 9 + 7


let firstName = "anas" // anas
let lastName = "mumtaz" // mumtaz

let fullName = firstName + "     \t " + lastName // addition nhi kehte => string concatenation

console.log(fullName)

console.log(firstName[3])

console.log(lastName[0])

console.log(fullName[6])

firstName[0] //a
firstName[1] // n
firstName[2] //a
firstName[3] //s

for (let i in firstName) { // ye ustadi dikai, sj=hort syntax of for loop, ye js, c, c++
    // console.log(i)
    
    console.log(firstName[i])
}

// is ko dek ap ki khuhi ka koi thikana e nhi rha ho ga
for (let i = 0; i<=3; i++){
    console.log(firstName[i])
}


// control statements
// 1. conditiona statements (if - else statements b kehte hain)

console.log(5>=5) // true / false

if(5>10){
    // true
    console.log(`5 is less than 10`)
}else {
    // false
    console.log(`5 is not less than 10`)
}

console.log((2>5)  && (2===2) )
console.log((2>5)  || (2===2) )
console.log(!(false))

if ((2 > 5) && (2 === 2)){

}else{

}


// let i = 3  // 3
// i+=5 // 4

for(let i = 1; i <= 10; i++){
    // code
    console.log(`for loop running times = ${i}`)
}
console.log(`for loop ended`)

// while (true){
//     console.log(`do something`)
// }

console.log(`experimenting the while loop`)


let testingNum = 1
while(testingNum < 10){
    console.log(`running the while loop testing num times `)


    console.log(`while loop is running`)
    console.log(testingNum)
    console.log(`times`)
    testingNum+=3
}