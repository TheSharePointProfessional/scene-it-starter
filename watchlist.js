document.addEventListener('DOMContentLoaded', function() {
    function renderMovies() {
        var watchlist = localStorage.getItem('watchlist')
        var watchlistJSON = JSON.parse(watchlist)
        if (watchlist == null) {
            watchlist = []
        } else {
            var movieHTML = watchlistJSON.map(function(currentMovie) {
                return currentMovie = `
                    <div class="card movie" style="width: 18rem">
                    <img class="card-img" src="${currentMovie.Poster}"/>
                        <div class="card-body">
                            <h2 class="card-title movieTitle">${currentMovie.Title}</h2>
                            <h3 class="card-text releaseDate">${currentMovie.Year}</h3>
                        </div>
                    </div>
                `
            })
        }
        return movieHTML.join('')
    }
    $(".movies-container").append(renderMovies(movieData))
})
