const express = require('express');
const axios = require("axios");


const app = express();
const PORT = process.env.PORT || 3000;

let memeURL = '';
async function getData (reddit, id) {
    const mainUrl = `https://reddit.com/r/${reddit}.json?limit=${id}`;
    await axios
    .get(mainUrl)
    .then((response) => {
        let memeNumber = randNo(id);
        console.log(response.data["data"]["children"][memeNumber]["data"]["url_overridden_by_dest"]);
        let memeFound = false;
        while (!memeFound) {
            if (response.data["data"]["children"][memeNumber]["data"]["secure_media"] === null) {
                memeURL = response.data["data"]["children"][memeNumber]["data"]["url_overridden_by_dest"];
                memeFound = true;
            } else {
                memeNumber = randNo(id);
            }
        }
    })
    .catch((err) => {
        console.log(err);
    });
}

const randNo = (limit) => {
    const thatNo = Math.floor(Math.random() * limit);
    return thatNo;
};

app.get('/:reddit/:id', async (req, res) => {
    await getData(req.params.reddit, req.params.id);
    console.log("memeURL");
    res.json({
        url: memeURL
    })
})

app.get('/', (req, res) => {
    res.send("Please have a look at my GitHub's README for instructions, but if you already did then go ahead :D.")
})

app.get('/:reddit', (req, res) => {
    let reddit = req.params.reddit;
    res.send(`Please enter the total number of memes to be scraped from subreddit ${reddit}`)
})

app.get('*', (req, res) => {
    res.send("Oops, you're at the wrong page (404!)")
})

app.listen(PORT, () => {
    console.log('listening on port');
})

