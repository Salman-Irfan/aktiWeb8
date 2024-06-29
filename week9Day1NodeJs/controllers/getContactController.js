const getContactCntroller = (req, res) => {
    return res.json({
        success: true,
        message: `contact`
    })
}

module.exports = getContactCntroller