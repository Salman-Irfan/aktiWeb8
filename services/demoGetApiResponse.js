export const demoGetApiResponse = async () => {
    const response = await axios.get(`http://127.0.0.1:3000`)
    console.log(response)
}