'use strict'


const menuList = document.querySelector('.menu_list')
const body = document.querySelector('body')
if (menuList) {
    const burg = document.querySelector('.burger');
    burg.addEventListener("click", function (e) {
        menuList.classList.toggle('_active')
        burg.classList.toggle('_active')
        body.classList.toggle('_lock')
    });
};