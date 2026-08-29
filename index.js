// get a random number based on the number of artists
// or get a random genre??
// idk man and then pull a random song??


async function getRandomTrack() {
    let randomNumber = Math.floor(Math.random() * 50);
    const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=tag.getTopTags&api_key=1ab15445a60aeb6ac38fa4a58d776a53&format=json`);
    const genre = response.data.toptags.tag[randomNumber].name;
    let randomNumber2 = Math.floor(Math.random() * 1000);
    const response2 = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${genre}&api_key=1ab15445a60aeb6ac38fa4a58d776a53&limit=1000&format=json`);
    const trackName = `${response2.data.tracks.track[randomNumber2].name}`
    const trackArtist = `${response2.data.tracks.track[randomNumber2].artist.name}`
    document.querySelector('#content>h2').textContent = `${trackName} by ${trackArtist}`
    document.querySelector('#content>h3').textContent = `Genre: ${genre}`
}

document.querySelector('button').addEventListener('click', () => {
    getRandomTrack();
})