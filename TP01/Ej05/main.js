document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    let canvas = document.querySelector("#js-canvas");
    let ctx = canvas.getContext("2d");
    let img = ctx.getImageData(0, 0, canvas.clientWidth, canvas.clientHeight);

    function crearGradiente() {//Negro,amarillo,rojo;

        console.log("Working");

        for (let y = 0; y < canvas.clientHeight; y++) {

            let vertical_grad = (1 - ((y + 1) / canvas.clientHeight));

            for (let x = 0; x < canvas.clientWidth; x++) {

                let byte = (x + (y * canvas.clientWidth)) * 4;
                let rgba = [];
                if (x < canvas.clientWidth / 2) {

                    rgba[0] = calcularGradiente(0, 255, x, vertical_grad);
                    rgba[1] = calcularGradiente(0, 255, x, vertical_grad);
                    rgba[2] = calcularGradiente(0, 0, x, vertical_grad);
                    rgba[3] = 255;

                } else {

                    rgba[0] = calcularGradiente(255, 255, x - (canvas.clientWidth / 2), vertical_grad);
                    rgba[1] = calcularGradiente(255, 0, x - (canvas.clientWidth / 2), vertical_grad);
                    rgba[2] = calcularGradiente(0, 0, x - (canvas.clientWidth / 2), vertical_grad);
                    rgba[3] = 255;

                }

                img.data[byte] = rgba[0];
                img.data[byte + 1] = rgba[1];
                img.data[byte + 2] = rgba[2];
                img.data[byte + 3] = rgba[3];
                //if (y == 100) console.log(img.data[byte + 1]);

            }
        }

        ctx.putImageData(img, 0, 0);

        console.log("Done");
    }
    function calcularGradiente(colorA, colorB, pos, concentracionY) {

        let dif = (colorB - colorA) * concentracionY;
        let min = 255 * (1 - concentracionY);


        let concentracionX = pos / (canvas.clientWidth / 2);
        dif *= concentracionX;

        dif += min;

        return (colorA*concentracionY + dif);

    }

    crearGradiente();

});