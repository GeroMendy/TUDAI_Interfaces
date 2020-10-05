document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    let mario = document.querySelector("#mario");
    let honguito = document.querySelector("#honguito");
    let position_helper = document.querySelector("#position_helper");
    let honguito_inicial_pos = document.querySelector("#background").clientWidth * 0.9;

    let scroll = window.requestAnimationFrame;

    function loop() {

        let rect = position_helper.getBoundingClientRect();

        mario.style.left = (rect.top / -3) + "px";
        honguito.style.left = (honguito_inicial_pos + (rect.top)/4) + "px";

        scroll(loop);
    }

    // Call the loop for the first time
    loop();

    function getCssProperty(elem, property) {

    }


});