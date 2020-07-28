var boton = document.getElementById("envio")
var aviso = document.getElementById("aviso")
var lista = document.createElement("ul")
var eleLista = document.createElement("li")
var textoLista = document.createTextNode("hola")


var nombre = document.getElementById("nombre")
var numero = document.getElementById("numeros") 
var correo = document.getElementById("correo")

eleLista.appendChild(textoLista)
lista.appendChild(eleLista);
aviso.appendChild(lista);



boton.addEventListener('click',(e)=>{
    evitarEnvio(e)
})
boton.addEventListener('click',()=>{


})


