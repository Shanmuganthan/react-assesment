import axios from "axios";

const API_URL = "http://localhost:3000/api/"

export const searchArtGallery = async (text) => {
    return await axios.get(`${API_URL}ArtGallery?search=${text}`)
}

export const fetchLatesArtGallery = async (text) => {
    return await axios.get(`${API_URL}getLatestGallery?`)
}

export const fetchListByIds = async (ids) => {
    return await axios.get(`${API_URL}getArtGalleryByIds?ids=${ids}`)
}

