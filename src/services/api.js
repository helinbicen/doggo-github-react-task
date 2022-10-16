
const axios = require('axios');

export const apiURL = "https://api.github.com"

export const api = axios.create({
  baseURL: 'https://api.github.com'
})

