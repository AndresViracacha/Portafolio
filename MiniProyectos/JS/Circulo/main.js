radio = window.prompt("Ingresa el radio de tu circulo", 0);
function area(radio){
    area = Math.pow(radio,2)*Math.PI;
    return area;
}
document.write(area(radio));