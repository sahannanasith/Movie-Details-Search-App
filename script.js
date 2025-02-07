function search() {
    let inputTag = document.getElementById("input");
    let movieName = inputTag.value;
    console.log(movieName);

    let htmlRequest = new XMLHttpRequest();
    let url = "https://www.omdbapi.com/?i=tt3896198&apikey=b9155467&t=" + movieName;

    htmlRequest.open("GET", url);
    htmlRequest.send();
    htmlRequest.responseType = "json";
    htmlRequest.onload = () => {
        let response = htmlRequest.response;
        console.log(response);

        let imageTag = document.getElementById("poster");
        imageTag.src = response.Poster;

        let titleTag = document.getElementById("title");
        titleTag.innerHTML = "Title : " + response.Title;

        let genreTag = document.getElementById("genre");
        genreTag.innerHTML = "Genre : " + response.Genre;

        let runTimeTag = document.getElementById("runTime");
        runTimeTag.innerHTML = "Run Time : " + response.Runtime;

        let yearTag = document.getElementById("year");
        yearTag.innerHTML = "Year : " + response.Year;

        let imdbRatingTag = document.getElementById("imdbRating");
        imdbRatingTag.innerHTML = "IMDB Rating : " + response.imdbRating;

        let directorTag = document.getElementById("director");
        directorTag.innerHTML = "Director : " + response.Director;

        let writerTag = document.getElementById("writer");
        writerTag.innerHTML = "Writer : " + response.Writer;

        let actorsTag = document.getElementById("actors");
        actorsTag.innerHTML = "Actors : " + response.Actors;

        let boxOfficeTag = document.getElementById("boxOffice");
        boxOfficeTag.innerHTML = "Box Office : " + response.BoxOffice;

        let countryTag = document.getElementById("country");
        countryTag.innerHTML = "Country : " + response.Country;
    }
}

document.querySelector('button').addEventListener('click', function() {
    // Find all p elements inside .details
    const paragraphs = document.querySelectorAll('.details p');
    
    // Change the background color of each paragraph
    paragraphs.forEach(p => {
        p.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'; // Change to desired background color
    });
});