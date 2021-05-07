const axios = require('./axios');

async function fetchData() {
    const req = await axios.get('/memes/10');

    console.log(req.data);
}

fetchData();