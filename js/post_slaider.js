'use strict'

let i;
let arr = [1, 2, 3];
let it1 = document.getElementById("it1"),
    it2 = document.getElementById("it2"),
    it3 = document.getElementById("it3");

function plus() {
    for (i = 0; i < 3; i++) {
        arr[i] += 1;
        if (arr[i] >= 4)
        {
            arr[i] = 1;
        }
        it1.style.order = arr[0];
        it2.style.order = arr[1];
        it3.style.order = arr[2];
    }    
}

function minus() {
    for (i = 0; i < 3; i++) {
        arr[i] -= 1;
        if (arr[i] < 1)
        {
            arr[i] = 3;
        }
        it1.style.order = arr[0];
        it2.style.order = arr[1];
        it3.style.order = arr[2];4
    }
}
