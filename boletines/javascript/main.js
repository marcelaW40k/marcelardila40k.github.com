
//DOM
/*
let titulos = document.querySelectorAll("th");

titulos.forEach(function(titulos){
    console.log(titulos);
});
*/
/*
let celdas = document.querySelectorAll("td");

celdas.forEach(function(){
    td.addEventListener('click', function(){
        console.log(this);
    });
    
});
*/
//obtener elementos de la clase .close
let cerrar =document.querySelectorAll(".close");

cerrar.forEach(function(link){
    link.addEventListener('click', function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');

        //quitarle las celdas
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        //Agregar celdas
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href = "/boletines";
        },600);

        return false;
    });
    
});

