function fetchStarwars() {
    return fetch("https://api.themoviedb.org/3/movie/1895?api_key=a289547c0a6f8a914fd1388cbf1c613a&language=fr-FR    ").then(r => r.json())
}

async function displayStarWars() {
    const data = await fetchStarwars()
    document.getElementById("starWars").innerHTML = `
    <h1>${data.title}</h1>
    <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title}"/>
    `
}

displayStarWars()