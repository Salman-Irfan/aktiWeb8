import { getDummyApiData } from "../utils/services/getDummyDataService.js"

// network request
console.log(`network requests start`) // 1s

const apiDataOne = document.getElementById("apiData")
apiDataOne.innerHTML = `start network request`

const getApiData = await getDummyApiData() // 10 sec
console.log(getApiData)

const networkResquest = document.getElementById("networkResquest")
networkResquest.innerHTML = `
    ${getApiData.data.id}
    ${getApiData.data.userId}
    ${getApiData.data.title}
    ${getApiData.data.completed}
`

apiDataOne.innerHTML = `network requests ends` // 2sec

// if found any html document value, jo abi ap ko hi pta
// 
