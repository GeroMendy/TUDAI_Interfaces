document.addEventListener("DOMContentLoaded",()=>{

    "use strict";

    let min_limit = 0;
    let max_limit = 10000;
    let matriz = [];

    cargarMatriz(1000,1000);

    console.log(matriz);

    console.log(calcularPromedioPorFila());

    function cargarMatriz(width,height) {

        for (let y = 0; y < width; y++) {

            matriz[y] = [];

            for (let x = 0; x < height; x++) {
                
                let new_elem = Math.random();
                new_elem = new_elem * (max_limit-min_limit) + min_limit;

                matriz[y][x] = Math.floor(new_elem);
                    
            }
            
        }
        
    }
    function buscarMax(){ //Ej 01.a

        let max_elem = 0;

        for(let y = 0; y < matriz.length ; y++){

            for(let x = 0; x < matriz[y].length; x++){
                if(max_elem<matriz[y][x]) max_elem = matriz[y][x];
            }
        }
        return max_elem;

    }

    function retornarMaxYMinSegunFila(){ //Ej 01.b

        let respuestas = [matriz.length];
        let es_par

        for(let y = 0; y < matriz.length; y++){

            es_par = (y % 2) == 0;
            for (let x = 0; x < matriz.length; x++){

                if(es_par){
                    if(!respuestas[y]||respuestas[y] < matriz[y][x])    respuestas[y] = matriz[y][x];
                }else{
                    if(!respuestas[y]||respuestas[y] > matriz[y][x])    respuestas[y] = matriz[y][x];
                }

            }

        }

        return respuestas;

    }

    function calcularPromedioPorFila(){  //Ej 01.c

        let promedios = []
        let sumatoria;

        for(let y = 0; y < matriz.length; y++){

            sumatoria=0;

            for (let x = 0; x < matriz.length; x++){

                sumatoria+=matriz[y][x];

            }

            if(matriz[y].length>0)    promedios[y]=(sumatoria/matriz[y].length);

        }
        return promedios;
    }
});