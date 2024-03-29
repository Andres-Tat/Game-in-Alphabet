"use strict";

// Получаем доступ к элементам по селекторам
let letterA = document.querySelector(".box_a");
let letterB = document.querySelector(".box_b");
let letterC = document.querySelector(".box_c");
let letterD = document.querySelector(".box_d");
let letterE = document.querySelector(".box_e");
let letterF = document.querySelector(".box_f");


letterA.addEventListener('click', function () {
    letterA.previousElementSibling.before(letterA)
} )
