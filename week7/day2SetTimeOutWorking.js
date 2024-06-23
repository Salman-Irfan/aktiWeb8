console.log(`any code of line one`)

setTimeout(() => {
    console.log(`timeout for 3s`)
}, 3000);

setTimeout(() => {
    console.log(`timeout for 1s`)
}, 1000);

console.log(`line after  tiemout functions`)