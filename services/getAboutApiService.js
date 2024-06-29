export const getAboutApiResponse = async () => {
    const aboutResponse = await axios.get(`http://127.0.0.1:4000/about`)
    console.log(aboutResponse) // cors => Cross Orifin Rrsource Origin
}