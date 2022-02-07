"use strict";
let numberOFAnime = prompt("Сколько аниме вы уже просмотрели?",'');
let personalAnimeDB = {
    count: numberOFAnime,
    anime: {},
    charecters: {},
    genres: [],
    privat: false
};

let i = 0;

while (i != 2){
    let  a = prompt("Одно из последних просмотренных аниме?", '');
    if (a == null || a.length == 0 || a.length >= 50){
        --i;
        continue;
    }
    let b = prompt("На сколько его оцениваете?", '');
    personalAnimeDB.anime[a] = b;
    i++; 
}
console.log(personalAnimeDB);