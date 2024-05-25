let fizanNotes = [`faizan html notes`, `css notes`]

let bilalNotes = [...fizanNotes]


bilalNotes[0] = `cher khaani krny ki koshish krty hue pakra gya`

console.log(bilalNotes)

console.log(fizanNotes)

console.log(`Hence Prove: faizan bhai ko bilal bhai sy insaaf mil gya`)

const bilal = document.getElementById('bilal')
bilal.innerHTML = `
    <center>
        <h1>Bilal Bhai !</h1>
        <h1>The Stage is All Yours !</h1>
        <h2>Go and Kill The Waves !</h2>
    </center>
`