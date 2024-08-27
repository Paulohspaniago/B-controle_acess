const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora");

diaSemana.textContent = "Domingo";

diaMesAno.textContent = getCurrentDay();
diaSemana.textContent = getWeekDay();

function getWeekDay() {
    const date= new Date();
    let days = ["Domingo", "Segunda-feira", "Terca-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira","Sabado"];
    return days[date.getDay()];

}

function printCurrentHour(){
    horaMinSeg.textContent = getCurrentHour();
}
setInterval(printCurrentHour,1000);

function getCurrentDay(){
    const date = new Date();
    
    let dia = date.getDate();
    let mes = date.getMonth() + 1;

    if (dia <10 ) {
        dia = "0" + dia;
    }

    if ( mes < 10 ){
        mes = "0" + mes ;
    }


    return dia + "/" + mes + "/" + date.getFullYear();
    
}

function getCurrentHour(){
    const date = new Date();

    let hora = date.getHours();
    let min = date.getMinutes();
    let seg = date.getSeconds();

    if (hora < 10) {
        hora = "0" + hora;
    }

    if (min < 10 ) {
        min = "0" + min;
    }

    if (seg < 10) {
        seg = "0" + seg;
    }

    return hora + ":" + min +  ":" + seg;
}

const btnBaterPonto = document.getElementById("btn-bater-ponto");
btnBaterPonto.addEventListener("click", register);

function register(){
    alert("bater ponto");
}