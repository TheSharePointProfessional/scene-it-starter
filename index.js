document.addEventListener('DOMContentLoaded', function() {
    function renderMovies(movieArray) {
        var movieHTML = movieArray.map(function(currentMovie) {
            return currentMovie = `
                <div class="card movie" style="width: 18rem">
                <img class="card-img" src="${currentMovie.Poster}"/>
                    <div class="card-body">
                        <h2 class="card-title movieTitle">${currentMovie.Title}</h2>
                        <h3 class="card-text releaseDate">${currentMovie.Year}</h3>
                        <a href="#" class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add!</a>
                    </div>
                </div>
            `
        })
        return movieHTML.join('')
    }
    document.getElementById('search-form').addEventListener('submit', function(e){
        e.preventDefault()
        var searchString = document.getElementById("search-bar").value
        var urlEncodedSearchString = encodeURIComponent(searchString)
        axios.get("http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString).then(function(response){
            console.log(response.data)
            movieData = response.data.Search
            $(".movies-container").append(renderMovies(movieData))
        })
    })
})

function saveToWatchlist(imdbID) {
    console.log('test')
    var movie = movieData.find(function(currentMovie) {
        return currentMovie.imdbID == imdbID
    })
    var watchlistJSON = localStorage.getItem('watchlist')
    var watchlist = JSON.parse(watchlistJSON)
    if (watchlist == null) {
        watchlist = []
    }
    watchlist.push(movie)
    watchlistJSON = JSON.stringify(watchlist)
    localStorage.setItem('watchlist', watchlistJSON)
}