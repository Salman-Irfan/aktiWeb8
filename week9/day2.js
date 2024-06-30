import { demoGetApiResponse } from "../services/demoGetApiResponse.js";

demoGetApiResponse()


const userForm = document.getElementById("userForm")
const name = document.getElementById("name")
const email = document.getElementById("email")

userForm.addEventListener("submit", async(e) => {
    e.preventDefault()
    console.log({
        "name": name.value,
        email: email.value,
    })
    // indeally this api again come from services and with async await and try catch
    const response = await axios.post(`http://127.0.0.1:3000/demo-post`, {
        name: name.value,
        email: email.value,
    })
    console.log(response)
})