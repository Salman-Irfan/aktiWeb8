const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

// app.get(`/`, (req,res)=>{
//     return res.send(`
//         <html>
//             <head>
//                 <title>Node Js </title>
//             </head>
//             <body>
//                 <h1>Node Js Server front end</h1>
//                 <form>
//                     <input type="text" placeholder="name" />
//                     <button type="submit">Submit</button>
//                 </form>
//                 <script>
//                     console.log("node server script inside express req res handler function")
//                 </script>
//             </body>
//         </html>
//     `)
// } )

app.get(`/`, (req, res)=>{
    return res.json({
        success: true,
        message: `json response from node server`
    })
})

app.get(`/about`, cors(), (req, res)=>{
    return res.json({
        success: true,
        message: `about route is being triggered`
    })
})

app.post(`/contact`, (req, res)=>{
    return res.json({
        success: true,
        message: `contact route with post method is being triggered`
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost${port}`)
})