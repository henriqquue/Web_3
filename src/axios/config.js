import axios from "axios"


const blogfetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-type": "application/json;"
    }
})

export default blogfetch ;