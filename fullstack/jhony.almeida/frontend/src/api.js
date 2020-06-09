import axios from "axios"

const SERVER_URL = "http://localhost:8080"

const server = axios.create({
    baseURL: SERVER_URL,
    timeout: 5000
})

async function getLocations(page, name = null) {
    return server.get(`${SERVER_URL}/locations`, { 
        params: { page, name },
        headers: { "Content-Type": "application/json" }
    })
    .then(response => Promise.resolve(response.data))
}

async function createLocation(location) {
    return server.post(`${SERVER_URL}/locations`, location)
    .then(response => Promise.resolve(response.data))
}

export default {
    getLocations,
    createLocation
}