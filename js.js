'use strict';

// // Получаю доступ ко всем элементам по селектору, получил путь к файлу аудио и присвоил его в переменную, создал пустую переменную 'newLetters'.
const letters = document.querySelectorAll('.boxes__box');
const audioClick = new Audio('audio/Mountain Audio - Menu Click.mp3');
const audioWin = new Audio('audio/huge win.wav');
let newLetters;

// Использую цикл 'for if', 'for else if', добавляю обработчик событий для массива 'letters' и прописываю функциональные выражения с использованием 'previousElementSibling' и 'nextElementSibling', добавляю проигрывание музыки после каждого события, , использую переменную 'newLetters' которая собирает в себя результат события 'previousElementSibling' и 'nextElementSibling'.
for (let i = 0; i < letters.length; i++) {
  letters[i].addEventListener('click', function () {
    if (letters[i].previousElementSibling != null) {
      letters[i].previousElementSibling.before(letters[i]);
      audioClick.play();
      newLetters = document.querySelectorAll('.boxes__box');
      console.log(newLetters);
    } else if (letters[i].nextElementSibling != null) {
      letters[i].nextElementSibling.after(letters[i]);
      audioClick.play();
      newLetters = document.querySelectorAll('.boxes__box');
      console.log(newLetters);
    }
    if (
      // создал условие, при котором метод '.contains' проверяет, совпали ли классы с индексом массива и выполняет условие, при котором будет играть музыка.
      newLetters[0].classList.contains('box_a') &&
      newLetters[1].classList.contains('box_b') &&
      newLetters[2].classList.contains('box_c') &&
      newLetters[3].classList.contains('box_d') &&
      newLetters[4].classList.contains('box_e') &&
      newLetters[5].classList.contains('box_f')
    ) {
      audioWin.play();
    }
  });
}
