const btnToggle=document.querySelector('.toggle-btn')
btnToggle.addEventListener('click', function(){
    document.getElementById('sidebar').classList.toggle('active');
}); 

let nombre = prompt("Por Favor Ingrese Su Nombre").toUpperCase()
while (nombre.length < 3) {
  nombre = prompt("Demasiado corto, cuál es realmente tu nombre?");
}
span.textContent = "Hola, " + nombre;
const span = document.querySelector("#welcome");
let edad = prompt("Por Favor Ingrese Su Edad")

alert("Hola " + nombre + " de " + edad + " años, te interesaría adquirir tickects ? 🎟️")

