let nombreMascota = prompt("¿Cómo se llama tu mascota?");
let nivelHambre = 50;      
let nivelFelicidad = 50;    

function mostrarEstado() {
  console.log(`Mascota: ${nombreMascota}, Hambre: ${nivelHambre}/100, Felicidad: ${nivelFelicidad}/100.`);
}


const alimentar = function(puntosComida) {
  nivelHambre -= puntosComida;  
  if (nivelHambre < 0) {
    nivelHambre = 0;  
  }
  console.log(`¡Ñam! El hambre de ${nombreMascota} ha disminuido. Hambre: ${nivelHambre}/100.`);
};


const jugar = (puntosDiversion) => {
  nivelFelicidad += puntosDiversion;  
  if (nivelFelicidad > 100) {
    nivelFelicidad = 100; 
  }
  console.log(`¡Qué divertido! La felicidad de ${nombreMascota} ha aumentado. Felicidad: ${nivelFelicidad}/100.`);
};


mostrarEstado();   
alimentar(30);     
mostrarEstado();  
jugar(20);         
mostrarEstado();   
