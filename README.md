# MemeBoi

A meme API written with javascript, node.js and express.js that scraps meme links from reddit's API. 

(Though the API was intended to fetch memes, it can be used to fetch images from any subreddit. For example - `http://meme-boii.herokuapp.com/Awww/10` will give you cute images of dogs and cats rather than memes.)

# Usage

1. Open the [deployment](https://meme-boii.herokuapp.com/).

2. Add `subreddit` you want to search after the URL, for example `https://meme-boii.herokuapp.com/dankmemes` (won't work yet) 

(Note: Not all subreddits are supported, if you find an empty json object after making several requests on a subreddit then it most probably is not supported. Some of the supported ones are `memes`, `dankmemes`, `pewdiepie` etc.).

3. Add the total number of memes out of which 1 random meme will be selected, for example `https://meme-boii.herokuapp.com/dankmemes/10`.

4. Boom! Keep refreshing to get a new meme (a URL obviously). The object returned will be of the form -
```JSON
{
  "url": "some_image_url_here"
}
```

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
5. To run the example located at `./useApi.js` execute -
```sh
node useApi.js
```

# Projects that use this API

- [MemeShare](https://www.github.com/Saransh-cpp/MemeShare)

An app made with Kotlin that fetches and displays memes filtered by category.

Let me know if any of your projects use this API, I'll be happy to add them here (You can do so much more than just memes using this API! And I'll appreciate if you can provide a link to this repository in the project that uses this API).
