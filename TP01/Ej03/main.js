document.addEventListener("DOMContentLoaded",()=>{

    "use strict";

    let canvas = document.querySelector("#js-canvas");
    let ctx = canvas.getContext("2d");

    let input_canvas_color = document.querySelectorAll(".js-canvas_color");
    let img = ctx.getImageData(0,0,canvas.clientWidth,canvas.clientHeight);

    
    function cambiarAColor(rgba=[0,200,0,255]){

        let byteArray = Uint8ClampedArray.from(rgba);

        console.log(img.data);

        for( let i = 0; i < img.data.length; i++ ){
            //Divide i en 4(rgba) y toma el resto. Funciona porque todo (i % 4) en el array img corresponden al valor [r,g,b,a] del pixel i.
            img.data[i] = byteArray[i % 4];
            
        }   //Podría usarse un i*=4 en el for para mejorar el rendimiento.(el recorrido del for duraría 1/4 del actual).
        
        ctx.putImageData(img,0,0);
    }

    canvas.addEventListener("click",()=>{

        let color = [];
        for(let i=0; i < input_canvas_color.length; i++){
            color[i] = input_canvas_color[i].value;
        }
        console.log(color);
        cambiarAColor(color);
    });
    

});