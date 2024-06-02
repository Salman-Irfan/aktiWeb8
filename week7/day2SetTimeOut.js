import { hideNotif } from "../utils/services/getDummyDataService.js";

const showNotification = document.getElementById("showNotification")
const hideButton = document.getElementById("hideButton")
hideButton.style.display = "none"

setTimeout(() => {

    showNotification.innerHTML = `
        <div>
            subscribe our newsletter
        </div>
        `
        hideButton.style.display = "block"
}, 2000);


hideButton.addEventListener("click", hideNotif)

// const hideNotification = document.getElementById("showNotification")
// setTimeout(() => {
//     showNotification.innerHTML = `
        
//     `
// }, 4000);