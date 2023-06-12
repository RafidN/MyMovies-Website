// fetch('http://www.omdbapi.com/?apikey=cfc93c83&')
// https://www.omdbapi.com/?s=thor&apikey=cfc93c83  SEARCH

const movieListEl = document.querySelector(".movies")

// load movies from API

async function onSearchChange(event){
    movieName = event.target.value
    const movies = await fetch(`https://www.omdbapi.com/?s=${movieName}&page=1&type=movie&apikey=cfc93c83`);
    const moviesData = await movies.json();
    console.log(moviesData);
    if(moviesData.Response == "True"){
        clearBox();
    }
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
            <img src="${movieData.Poster=="N/A"? "https://static.displate.com/857x1200/displate/2022-04-15/7422bfe15b3ea7b5933dffd896e9c7f9_46003a1b7353dc7b5a02949bd074432a.jpg" : movieData.Poster}" alt="" class="movie__img"> 

            <div class="movie__description">
                <p class="movie__title">${movieData.Title}</p>
                <p class="movie__info">${movieData.Year} &middot; ${movieData.Runtime} &middot; ${movieData.Rated}</p>
                <p class="movie__plot"> <b>Plot: </b> ${movieData.Plot}</p>
                <div class="movie__ratings">
                    <div class="movie__rating">
                        <div class="movie__rating--title">IMDB</div>
                        <div class="movie__rating--score">${movieData.imdbRating}</div>
                    </div>

                    <div class="movie__rating">
                        <div class="movie__rating--title">Metacritic</div>
                        <div class="movie__rating--score">${movieData.Metascore!="N/A"? movieData.Metascore + "/100": "N/A"}</div>
                    </div>

                    <div class="movie__rating">
                        <div class="movie__rating--title">Box Office</div>
                        <div class="movie__rating--score">${movieData.BoxOffice}</div>
                    </div>
                </div>
            </div>
        </div>
    </li>`
}

function clearBox() {
    movieListEl.innerHTML = "";
}