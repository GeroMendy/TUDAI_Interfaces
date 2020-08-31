document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    let canvas = document.querySelector("#js-canvas");
    let ctx = canvas.getContext("2d");
    let new_image = new Image();
    new_image.src = "imgs/Saitama_ok - reduced.png";
    new_image.onload = () => {

        dibujarImagen(new_image);
    }

    function dibujarImagen(new_image) {//Ej 07.a
        canvas.width = new_image.width;
        canvas.height = new_image.height;
        ctx.drawImage(new_image, 0, 0);
    }
});