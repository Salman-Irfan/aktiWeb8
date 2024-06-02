console.log(document.title)
let originalTitle = document.title
let changedTitle = `message recieved`
let count = 0

setInterval(() => {
    document.title = originalTitle
}, 1000);

setInterval(() => {
    document.title = `${changedTitle} + ${count++}`
}, 1500);