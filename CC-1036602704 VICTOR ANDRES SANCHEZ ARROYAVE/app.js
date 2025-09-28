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

// Función Flecha: Simular el paso del tiempo
const simularPasoDelTiempo = () => {
  for (let i = 0; i < 4; i++) {  // Simula 4 horas
    nivelHambre += 10;    // Aumenta hambre
    nivelFelicidad -= 5;  // Disminuye felicidad

    // Mantener valores dentro de 0 - 100
    if (nivelHambre > 100) nivelHambre = 100;
    if (nivelFelicidad < 0) nivelFelicidad = 0;
  }

  console.log("Han pasado algunas horas...");
  mostrarEstado();
};

// Función Declarativa: Diagnóstico de la mascota
function diagnosticoMascota() {
  // Evaluar hambre
  if (nivelHambre < 30) {
    console.log("Tu mascota está satisfecha.");
  } else if (nivelHambre < 60) {
    console.log("Tu mascota tiene algo de hambre.");
  } else {
    console.log("¡Alerta! Tu mascota está muy hambrienta.");
  }

  // Evaluar felicidad con switch
  switch (true) {
    case nivelFelicidad >= 70:
      console.log("Tu mascota está muy feliz y juguetona.");
      break;
    case nivelFelicidad >= 40:
      console.log("Tu mascota está contenta.");
      break;
    default:
      console.log("Tu mascota se siente un poco triste.");
      break;
  }
}

alimentar(20);  
jugar(30); 
 mostrarEstado();
 simularPasoDelTiempo();  
diagnosticoMascota(); 