// fetch('http://www.omdbapi.com/?apikey=cfc93c83&')
// https://www.omdbapi.com/?s=thor&apikey=cfc93c83  SEARCH

const movieListEl = document.querySelector(".movies")

// load movies from API

async function onSearchChange(event){
    console.log(event.target.value)
    movieName = event.target.value
    const movies = await fetch(`https://www.omdbapi.com/?s=${movieName || "a"}&page=1&apikey=cfc93c83`);
    const moviesData = await movies.json();
    console.log(moviesData);
    movieListEl.innerHTML = moviesData.Search.map(movie => `
    <li class="movie">
        <div class="movie__wrapper">
            <img src="${movie.Poster}" alt="" class="movie__img"> 

            <div class="movie__description">
                <p class="movie__title">${movie.Title}</p>
                <p class="movie__info">${movie.Year} &middot; 136 min &middot; PG-13</p>
                <p class="movie__plot"> <b>Plot: </b> The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.</p>
                <div class="movie__ratings">
                    <div class="movie__rating">
                        <div class="movie__rating--title">IMDB</div>
                        <div class="movie__rating--score">7.6</div>
                    </div>

                    <div class="movie__rating">
                        <div class="movie__rating--title">Rotten Tomatoes</div>
                        <div class="movie__rating--score">85%</div>
                    </div>

                    <div class="movie__rating">
                        <div class="movie__rating--title">Metacritic</div>
                        <div class="movie__rating--score">67/100</div>
                    </div>
                </div>
            </div>
        </div>
    </li>`).join("");
}

function movieHTML(movie) {
    // const movieId = movie.imdbID
    // const movie = await fetch(`https://www.omdbapi.com/?s=${movieId}&apikey=cfc93c83`);
    // const movieData = await movie.json();
    return `
    <li class="movie">
        <div class="movie__wrapper">
            <img src="${movie.Poster}" alt="" class="movie__img"> 

            <div class="movie__description">
                <p class="movie__title">Guardians of the Galaxy Vol. 2</p>
                <p class="movie__info">${movie.Year} &middot; 136 min &middot; PG-13</p>
                <p class="movie__plot"> <b>Plot: </b> The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.</p>
                <div class="movie__ratings">
                    <div class="movie__rating">
                        <div class="movie__rating--title">IMDB</div>
                        <div class="movie__rating--score">7.6</div>
                    </div>

                    <div class="movie__rating">
                        <div class="movie__rating--title">Rotten Tomatoes</div>
                        <div class="movie__rating--score">85%</div>
                    </div>

                    <div class="movie__rating">
                        <div class="movie__rating--title">Metacritic</div>
                        <div class="movie__rating--score">67/100</div>
                    </div>
                </div>
            </div>
        </div>
    </li>`
}