import axios from "axios"

const baseUrl = "http://tipicosv.test/api"

export const httpApi = axios.create({ baseUrl })