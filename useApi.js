const axios = require('./axios');

async function fetchData() {
    const req = await axios.get('/100');

    console.log(req.data);
}

fetchData();