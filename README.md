# MemeBoi

A meme API written with javascript, node.js and express.js that scraps meme links from reddit's API. 

# Usage

1. Open the [deployment](https://meme-boii.herokuapp.com/).

2. Add 'subreddit' you want to search after, for example `https://meme-boii.herokuapp.com/dankmemes` (won't work yet).

3. Add the total number of memes out of which 1 random meme will be selected, for example `https://meme-boii.herokuapp.com/dankmemes/10`.

4. Boom! Keep refreshing to get a new meme (a URL obviously).

5. Add this API link wherever you want to summon memes (app, website, desktop app etc.).

# How it works

- This API uses the `reddit API` to fetch number of memes specified by the user with the subreddit.

- Then it chooses a random meme and provides you with its link!

# Tips

- Keep the number of total memes less, more memes = more time to fetch one.

- Always use a `try` and `catch` block.

- All contributions are welcome:). 

# Installing locally

1. `Fork` and `clone` the repository.

2. Navigate to the `MemeBoi` repository using -
```sh
cd MemeBoi
```
3. Run the following command to install dependencies - 
``` sh
npm install
```
4. To start the server run -
```sh
npm start
```
5. To run the example located at `./useApi.js` -
```sh
node useApi.js
```
