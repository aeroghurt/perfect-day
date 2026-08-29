// get a random number based on the number of artists
// or get a random genre??
// idk man and then pull a random song??


async function getRandomGenre() {
    let randomNumber = Math.floor(Math.random() * 50);
    const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=tag.getTopTags&api_key=1ab15445a60aeb6ac38fa4a58d776a53&format=json`);
    const genre = response.data.toptags.tag[randomNumber].name
    console.log(genre)
}

getRandomGenre();