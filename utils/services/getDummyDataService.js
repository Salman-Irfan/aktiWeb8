export const getDummyApiData = async () => {
    try {
        const apiResponse = await axios.get(`http://jsonplaceholder.typicode.com/todos/1`) // 10 sec, for example slow network
        return apiResponse
    } catch (error) {
        console.log(error)
        console.log(error.message)
        return (error.message)
    }
}