document.addEventListener("DOMContentLoaded",()=>{

    "use strict";

    let canvas = document.querySelector("#js-canvas");
    let ctx = canvas.getContext("2d");

    //let color = "#0000ff";

    pintarRectangulo(/*color*/);

    function pintarRectangulo(color = 'black'){
        ctx.fillStyle = color;
        ctx.fillRect( 0, 0, canvas.clientWidth, canvas.clientHeight );

    }

});