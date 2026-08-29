// get a random number based on the number of artists
// or get a random genre??
// idk man and then pull a random song??


async function getRandomGenre() {
    let randomNumber = Math.floor(Math.random() * 50);
    const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=tag.getTopTags&api_key=1ab15445a60aeb6ac38fa4a58d776a53&format=json`);
    const genre = response.data.toptags.tag[randomNumber].name
    console.log(genre)
}

async function getRandomTrack(genre) {
    let randomNumber = Math.floor(Math.random() * 1000);
    const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${genre}&api_key=1ab15445a60aeb6ac38fa4a58d776a53&limit=1000&format=json`);
    const trackName = response.data.tracks.track[randomNumber].name
    const trackArtist = response.data.tracks.track[randomNumber].artist.name
}
getRandomGenre();
