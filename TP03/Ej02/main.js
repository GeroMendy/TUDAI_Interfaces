document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    let canvas = document.querySelector("#js-canvas");
    let ctx = canvas.getContext("2d");

    let canvas_width = canvas.clientWidth;
    let canvas_height = canvas.clientHeight;

    let manecillas = [];

    manecillas[0] = new Manecilla(ctx, canvas_width / 2, canvas_height / 2, canvas_height / 3, canvas_height / 7, 0, "#FF0000FF", 1);
    manecillas[1] = new Manecilla(ctx, canvas_width / 2, canvas_height / 2, canvas_height / 3, canvas_height / 7, 0, "#000000FF", 3);
    manecillas[2] = new Manecilla(ctx, canvas_width / 2, canvas_height / 2, canvas_height / 5, canvas_height / 9, 0, "#000000FF", 4);

    function redibujar_reloj(hora, minuto, segundo) {

        clearCanvas();

        //Debug.
        // console.log(hora + ":" + minuto + ":" + segundo);
        //Fin debug

        manecillas[2].setDireccion(1.0 * hora / 12);
        manecillas[2].draw();
        manecillas[1].setDireccion(1.0 * minuto / 60);
        manecillas[1].draw();
        manecillas[0].setDireccion(1.0 * segundo / 60);
        manecillas[0].draw();


    }
    function actualizarReloj() {
        let date = new Date();
        let segundos = date.getSeconds();
        let minutos = date.getMinutes();
        let hora = date.getHours();

        redibujar_reloj(hora, minutos, segundos);
    }

    function clearCanvas() {
        ctx.clearRect(0, 0, canvas_width, canvas_height);
    }

    setInterval(actualizarReloj, 1000);


});