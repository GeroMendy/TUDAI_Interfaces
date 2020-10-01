let agujas = document.querySelectorAll(".aguja");
let date = new Date();

let segundos = date.getSeconds();
let minutos = date.getMinutes();
let horas = date.getHours();

let delays = [segundos, calcularSegundos(segundos, minutos), calcularSegundos(segundos, minutos, horas)];
for (let i = 0; i < agujas.length; i++) {
    agujas[i].style.animationDelay = "-" + delays[i] + "s";

}

function calcularSegundos(segundos = 0, minutos = 0, horas = 0) {
    horas *= 60 * 60;
    minutos *= 60;
    return segundos + minutos + horas;
}