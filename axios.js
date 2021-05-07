const axios = require("axios");

const instance =axios.create({
    baseURL: 'https://meme-boii.herokuapp.com'
})

module.exports = instance;