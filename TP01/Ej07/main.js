document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    let canvas = document.querySelector("#js-canvas");
    let ctx = canvas.getContext("2d");
    let new_image = new Image();
    new_image.src = "imgs/Saitama_ok - reduced.png";
    //new_image.crossOrigin = "Anonymous";
    new_image.onload = () => {

        dibujarImagen(new_image);
    }

    function dibujarImagen(new_image) {//Ej 07.a
        canvas.width = new_image.width;
        canvas.height = new_image.height;
        ctx.drawImage(new_image, 0, 0);
    }

    function cambiarAGrises(img) {      //IMPORTANTE! - Necesita ejecutarse desde XAMPP para tener los permisos de edición de la imagen (sino falla el "ctx.getImageData").

        for (let pixel = 0; pixel < img.data.length; pixel += 4) {

        
	    img.data[pixel] = img.data[pixel+1] = img.data[pixel+2] = (img.data[pixel] + img.data[pixel+1] + img.data[pixel+2])/3;


        }

        ctx.putImageData(img, 0, 0);

    }

    document.querySelector("#js-toogle_gris").addEventListener("click", () => {

        cambiarAGrises(ctx.getImageData(0, 0, canvas.clientWidth, canvas.clientHeight));

    });

});