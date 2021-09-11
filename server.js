const express = require('express');
const axios = require("axios");


const app = express();
const PORT = process.env.PORT || 3000;

let memeURL = '';
async function getData (reddit, id, res) {
    const mainUrl = `https://reddit.com/r/${reddit}.json?limit=${id}`;
    await axios
    .get(mainUrl)
    .then((response) => {
        let memeNumber = randomNumber(id);
        console.log(response.data["data"]["children"][memeNumber]["data"]["url_overridden_by_dest"]);
        let memeFound = false;
        while (!memeFound) {
            if (response.data["data"]["children"][memeNumber]["data"]["secure_media"] === null) {
                memeURL = response.data["data"]["children"][memeNumber]["data"]["url_overridden_by_dest"];
                memeFound = true;
            } else {
                memeNumber = randomNumber(id);
            }
        }
    })
    .catch((err) => {
        res.status(400).send("You most probably entered a non-existent subreddit or a string instead of numerical total number of posts. If there was any other issue, feel free to open up an issue on the GitHub repository. (Make sure your internet is working fine, sometimes Reddit's API doesn't respond too). <br> <br> Here is the error that we encountered - " + err)
    });
}

const randomNumber = (limit) => {
    const randNo = Math.floor(Math.random() * limit);
    return randNo;
}

app.get('/:reddit/:id', async (req, res) => {
    await getData(req.params.reddit, req.params.id, res);
    console.log("memeURL");
    res.status(200).json({
        url: memeURL
    })
})

app.get('/', (req, res) => {
    res.status(200).json({
        "message":"Please have a look at my GitHub's README for instructions, but if you already did then go ahead :D."})
})

app.get('/:reddit', (req, res) => {
    let reddit = req.params.reddit;
    res.status(200).json({
        "message":`Please enter the total number of memes to be scraped from subreddit ${reddit}`})
})

app.use((req, res) => {
    res.status(404).json({
        "message":"Oops, you're at the wrong page (404!)"})
})

app.listen(PORT, () => {
    console.log('listening on port');
})

