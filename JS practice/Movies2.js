let numberOfFilms 

function start() {
    numberOfFilms = +prompt("How much movies do you watched  this summer?", " ");

    while(numberOfFilms == ' ' || numberOfFilms == null || isNaN(numberOfFilms)) { 
        numberOfFilms = +prompt("How much movies do you watched  this summer?", " ");
    }

}
// start();

let personalMoviesDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
console.log("🚀 ~ file: numberOfFilms.js:11 ~ personalMoviesDB:", personalMoviesDB)


function rememberMyFilms() { 
    for( let i = 0; i < 2; i++) {
        const a = prompt (('What is last movie that you watched?', " ")),
              b = prompt ('What is your score for this movie?', " " );
        if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
            personalMoviesDB.movies[a] = b 
            console.log('Done');
        } else { 
            console.log('error');
            i--;
        }
    }
}
// rememberMyFilms();


function detectPersonalLevel() {

    if (personalMoviesDB.count < 10) {
        console.log("You should watch more movies")
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
        console.log("You have some time for movies :) ");
    } else if (personalMoviesDB.count >= 30) { 
        console.log("YOU ARE BIG FAN OF MOVIES!")
    } else {
        console.log('error')
    }
}
// detectPersonalLevel();


// function showMyDB(hidden){ 
//     if(personalMoviesDB.privat == false) {
//         console.log(personalMoviesDB)
//     }
// }
function showMyDB(hidden){ 
    if(!hidden) {
        console.log(personalMoviesDB)
    }
}
showMyDB(personalMoviesDB.privat);

function writeYourGenres(){
    for (let i = 1;i <= 3; i++ ) {
        personalMoviesDB.genres[i - 1] = prompt(`Your favorite genre under number ${i}`);
    }
 }
 writeYourGenres();
/*
 
const lastMovie = prompt('What is last movie that you watched?', " "),
      movieScore = prompt('What is your score for this movie?', " " ),
      lastMovie2 = prompt('What is last movie that you watched?', " "),
      movieScore2 = prompt('What is your score for this movie?', " " );


personalMoviesDB.movies[lastMovie] = movieScore;
personalMoviesDB.movies[lastMovie2] = movieScore2;

console.log("🚀 ~ file: numberOfFilms.js:21 ~ personalMoviesDB:", personalMoviesDB)
*/

