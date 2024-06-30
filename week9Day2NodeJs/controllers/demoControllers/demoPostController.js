const demoPostController = (req, res) => {
    console.log(req.body) // uundefined
    
    return res.json({
        success: true,
        messaage:  `post  req with data received`
    })
}
module.exports = demoPostController