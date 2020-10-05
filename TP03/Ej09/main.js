document.addEventListener("DOMContentLoaded", () => {

    "use strict";

    document.querySelector("#button_progress_1").addEventListener("click", () => {
        let barra_carga = document.querySelector("#bar_progress_1");
        mostrar_carga(barra_carga);
    });
    document.querySelector("#button_progress_2").addEventListener("click", () => {
        let barra_carga = document.querySelector("#bar_progress_2");
        mostrar_carga(barra_carga);
    });


    function mostrar_carga(elem) {
        let css_class_name = "loading";
        if(!elem.classList.contains(css_class_name)){
            elem.classList.add(css_class_name);
            setTimeout(()=>{
                elem.classList.remove(css_class_name)
            }, 5000);
        }
    }
    
});