// fetch('http://www.omdbapi.com/?apikey=cfc93c83&')
// https://www.omdbapi.com/?s=thor&apikey=cfc93c83  SEARCH

const movieListEl = document.querySelector(".movies")

// load movies from API

async function onSearchChange(event){
    movieName = event.target.value
    const movies = await fetch(`https://www.omdbapi.com/?s=${movieName || "apple"}&page=1&apikey=cfc93c83`);
    const moviesData = await movies.json();
    for(let i=0; i<3; i++) {
        const movieId = moviesData.Search[i].imdbID
        const moviewait = await fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=cfc93c83`);
        const movieInfo = await moviewait.json();
        console.log(movieInfo);
        movieHTML(movieInfo);
    }
}

function movieHTML(movieData) {
    movieListEl.innerHTML += `<li class="movie">
        <div class="movie__wrapper">
            <img src="${movieData.Poster}" alt="" class="movie__img"> 

            <div class="movie__description">
                <p class="movie__title">${movieData.Title}</p>
                <p class="movie__info">${movieData.Year} &middot; ${movieData.Runtime} &middot; ${movieData.Rated}</p>
                <p class="movie__plot"> <b>Plot: </b> ${movieData.Plot}</p>
                <div class="movie__ratings">
                    <div class="movie__rating">
                        <div class="movie__rating--title">IMDB</div>
                        <div class="movie__rating--score">1</div>
                    </div>

                    <div class="movie__rating">
                        <div class="movie__rating--title">Rotten Tomatoes</div>
                        <div class="movie__rating--score">2</div>
                    </div>

                    <div class="movie__rating">
                        <div class="movie__rating--title">Metacritic</div>
                        <div class="movie__rating--score">3</div>
                    </div>
                </div>
            </div>
        </div>
    </li>`
}