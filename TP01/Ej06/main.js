document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    let canvas = document.querySelector("#js-canvas");
    let ctx = canvas.getContext("2d");
    let img = ctx.getImageData(0, 0, canvas.clientWidth, canvas.clientHeight);

    let basic_colors = [
        [255, 135, 35, 255],
        [253, 35, 51, 255],
        [30, 216, 216, 255],
        [61, 238, 33, 255]
    ];

    function crearGradiente(colores = [[]]) {
        let width = canvas.clientWidth;
        let x_size = width / (colores.length - 1);
        for (let y = 0; y <= canvas.clientHeight; y++) {

            for (let n_color = 1; n_color < colores.length; n_color++) {

                for (let x = x_size * (n_color - 1); x < x_size * n_color; x++) {

                    let byte = (x + (y * width)) * 4;
                    let pos = x - (x_size * (n_color - 1));

                    img.data[byte] = calcularGradiente(colores[n_color - 1][0], colores[n_color][0], pos, colores.length - 1);
                    img.data[byte + 1] = calcularGradiente(colores[n_color - 1][1], colores[n_color][1], pos, colores.length - 1);
                    img.data[byte + 2] = calcularGradiente(colores[n_color - 1][2], colores[n_color][2], pos, colores.length - 1);
                    img.data[byte + 3] = 255;
                }

            }

        }
        ctx.putImageData(img, 0, 0);

    }

    function calcularGradiente(colorA, colorB, pos, cant_colores) {

        let dif = (colorB - colorA);


        let concentracionX = pos / (canvas.clientWidth / cant_colores);
        dif *= concentracionX;

        return colorA + dif;
    }

    crearGradiente(basic_colors);

});
