export const getContactAPiResponse = async () => {
    const contactResponse = await axios.get(`http://127.0.0.1:4000/contact`)
    console.log(contactResponse) // cors => Cross Orifin Rrsource Origin
}