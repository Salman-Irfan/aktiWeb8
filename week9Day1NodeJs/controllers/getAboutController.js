const getAboutController = (req, res) => {
    return res.json({
        success: true,
        message: `about`
    })
}

module.exports = getAboutController