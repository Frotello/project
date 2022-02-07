"use strict";
let numberOFAnime = prompt("Сколько аниме вы уже просмотрели?",'');
let personalAnimeDB = {
    count: numberOFAnime,
    anime: {},
    charecters: {},
    genres: [],
    privat: false
};

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
if (personalAnimeDB.count < 10){
    console.log('Просмотрено двольно мало аниме');
} else if (personalAnimeDB.count >= 10 && personalAnimeDB.count < 30){
    console.log('Вы класный зритель');
} else if (personalAnimeDB.count >= 30){
    console.log('Да вы дядушка, аниме МЕН');
} else {
    console.log('Произошла ошибка');
}

console.log(personalAnimeDB);