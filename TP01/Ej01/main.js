document.addEventListener("DOMContentLoaded",()=>{

    "use strict";

    let min_limit = 0;
    let max_limit = 10000;
    let matriz = [];

    cargarMatriz(1000,1000);

    console.log(matriz);

    console.log(buscarMax());

    function cargarMatriz(width,height) {

        for (let x = 0; x < width; x++) {

            matriz[x] = [];

            for (let y = 0; y < height; y++) {
                
                let new_elem = Math.random();
                new_elem = new_elem * (max_limit-min_limit) + min_limit;

                matriz[x][y] = Math.floor(new_elem);
                    
            }
            
        }
        
    }
    function buscarMax(){ //Ej 01.a

        let max_elem = 0;

        for(let x = 0; x < matriz.length ; x++){

            for(let y = 0; y < matriz[x].length; y++){
                if(max_elem<matriz[x][y]) max_elem = matriz[x][y];
            }
        }
        return max_elem;

    }

});