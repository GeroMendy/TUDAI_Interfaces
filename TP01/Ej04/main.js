document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    let canvas = document.querySelector("#js-canvas");
    let ctx = canvas.getContext("2d");

    let input_canvas_color = document.querySelectorAll(".js-canvas_color");
    let img = ctx.getImageData(0, 0, canvas.clientWidth, canvas.clientHeight);

    function crearGradiente(rgb = [0, 0, 0]) {

        for (let y = 0; y < canvas.clientHeight; y++) {

            let value_r = Math.floor(parseInt(rgb[0]) + ((255 - rgb[0]) * y / canvas.clientHeight));
            let value_g = Math.floor(parseInt(rgb[1]) + ((255 - rgb[1]) * y / canvas.clientHeight));
            let value_b = Math.floor(parseInt(rgb[2]) + ((255 - rgb[2]) * y / canvas.clientHeight));

            for (let x = 0; x < canvas.clientWidth; x++) {

                let pixel = (x + (y * canvas.clientWidth)) * 4;
                img.data[pixel] = value_r;
                img.data[pixel + 1] = value_g;
                img.data[pixel + 2] = value_b;
                img.data[pixel + 3] = 255;


            }

        }

        ctx.putImageData(img, 0, 0);
    }

    canvas.addEventListener("click", () => {

        let color = [];
        for (let i = 0; i < input_canvas_color.length; i++) {
            color[i] = input_canvas_color[i].value;
            if (color[i] == '' || color[i] < 0) color[i] = 0;
            else if (color[i] > 255) color[i] = 255;
        }
        crearGradiente(color);
    });


});