"use strict";
let numberOFAnime = prompt("Сколько аниме вы уже просмотрели?",'');
let personalAnimeDB = {
    count: numberOFAnime,
    anime: {},
    charecters: {},
    genres: [],
    privat: false
};
let  a = prompt("Одно из последних просмотренных аниме?", ''),
     b = prompt("На сколько его оцениваете?", ''),
     c = prompt("Одно из последних просмотренных аниме?", ''),
     d = prompt("На сколько его оцениваете?", '');

personalAnimeDB.anime[a] = b;
personalAnimeDB.anime[c] = d;

console.log(personalAnimeDB);