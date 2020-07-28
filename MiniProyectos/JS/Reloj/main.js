var tiempo = setInterval(() => {
    var a = new Date()

    var tHoras = document.getElementById("horas");
    var tMinutos = document.getElementById("minutos");
    var tSegundos = document.getElementById("segundos");

    tHoras.innerHTML=a.getHours()
    tMinutos.innerHTML=a.getMinutes()
    tSegundos.innerHTML=a.getSeconds()
       
}, 1000);
/* var a = document.getElementById("hora");
console.log(a)
a.innerHTML="" */
