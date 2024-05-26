// 123 (numbers) as a value
// "abc" (strings) as a value
// true (boolean) as a value

// functions => name => ram

// arrays

// object => heap memory k address sy

const firstObject = {
    num: 123,
    anyStr: "abc",
    isBoolean: true
}

const secondObj = firstObject
// console.log(secondObj) // first object wala e aye ga ?
secondObj.num = 789
// console.log(secondObj) // ab num ki value kia ho gi 123, 789 ?
// console.log(firstObject) // first obj mei sec obj k num ki value change krny kia 1st waly mei change ho gi ? 123, 789

const thirdObject = { ...firstObject }
thirdObject.anyStr = `zxc`
console.log(thirdObject)
console.log(firstObject)



// console.log(firstObject)
// console.log(firstObject.num) // 123
// console.log(firstObject.anyStr) // abc
// console.log(firstObject.isBoolean) // true

// console.log(typeof (firstObject))

const demoArray = [1, 2, 3, 4]
// console.log(typeof (demoArray)) // object


const objHtml = document.getElementById(`objHtml`)

objHtml.innerHTML = `
    <h1>${firstObject.num}</h1>
    <h2>${firstObject.anyStr}</h2>
    <h3>${firstObject.isBoolean}</h3>
`

let varOne = 123 // 123
let varTwo = varOne // 123
varTwo = 789 // 789
// console.log(varOne) // 123 / 789?

