"use strict";

let numberOFAnime;
function start() {
    numberOFAnime = +prompt("Сколько аниме вы уже просмотрели?",'');
    while (numberOFAnime == '' || numberOFAnime == null || isNaN(numberOFAnime)){
        numberOFAnime = +prompt("Сколько аниме вы уже просмотрели?",'');
    }
}
start();

let personalAnimeDB = {
    count: numberOFAnime,
    anime: {},
    charecters: {},
    genres: [],
    privat: false
};

function rememberMyAnime() {
    for (let i = 0; i < 2; i++){
        const  a = prompt("Одно из последних просмотренных аниме?", ''),
               b = prompt("На сколько его оцениваете?", '');
    
        if(a != null && b != null && a != '' && b != '' && a.length < 50){
            personalAnimeDB.anime[a] = b;
        } else {
            console.log('eror');
            i--;
        }
    }
}

rememberMyAnime();

function detectPersonalLevel() {
    if (personalAnimeDB.count < 10){
        console.log('Просмотрено двольно мало аниме');
    } else if (personalAnimeDB.count >= 10 && personalAnimeDB.count < 30){
        console.log('Вы класный зритель');
    } else if (personalAnimeDB.count >= 30){
        console.log('Да вы дядушка, аниме МЕН');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(){
    if (personalAnimeDB.privat == false){
        console.log(personalAnimeDB);
    }
    
}

showMyDB(personalAnimeDB.privat);

writeYourGenres();
function writeYourGenres () {
     for (let i = 1; i <= 3; i++){
         const genre = prompt('Ва шюбимы жанр под номером ' + i + '?' , '');
         personalAnimeDB.genres[i-1] = genre;
     }
}


console.log(personalAnimeDB.genres);