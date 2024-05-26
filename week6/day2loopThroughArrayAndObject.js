const arr1 = ["asd", "fgh", "jkl"]

console.log(arr1[0])
console.log(arr1[1])
console.log(arr1[2])

// how to loop through arrays
for (let i in arr1) {
    console.log(arr1[i])
}

const replicaOfAboveArr = {
    str1: "asd",
    str2: "fgh",
    str3: "jkl",
    
}

for (let i in replicaOfAboveArr) {
    console.log(i)
    console.log(replicaOfAboveArr[i])
    
}