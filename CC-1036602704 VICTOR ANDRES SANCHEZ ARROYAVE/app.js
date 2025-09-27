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


const simularPasoDelTiempo = () => {
  for (let i = 0; i < 4; i++) {
    nivelHambre += 10;  
    nivelFelicidad -= 5;  

   
    if (nivelHambre > 100) nivelHambre = 100;
    if (nivelFelicidad < 0) nivelFelicidad = 0;
  }

  console.log("Han pasado algunas horas...");
  mostrarEstado();  
};


function diagnosticoMascota() {
  
  if (nivelHambre < 30) {
    console.log("Tu mascota está satisfecha.");
  } else if (nivelHambre < 60) {
    console.log("Tu mascota tiene algo de hambre.");
  } else {
    console.log("¡Alerta! Tu mascota está muy hambrienta.");
  }

  
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


function iniciarCuidado() {
  while (true) {
   
    let opcion = prompt(`Menú de Cuidado de Mascota:
1 - Alimentar a la mascota
2 - Jugar con la mascota
3 - Simular el paso del tiempo
4 - Ver diagnóstico de la mascota
5 - Mostrar estado actual
6 - Despedirse de la mascota`);

    switch (opcion) {
      case '1':
        
        let puntosComida = parseInt(prompt("¿Cuántos puntos de comida le quieres dar a la mascota?"));
        if (!isNaN(puntosComida)) {
          alimentar(puntosComida);
        } else {
          console.log("Por favor ingresa un número válido.");
        }
        break;
      
      case '2':
        
        let puntosDiversion = parseInt(prompt("¿Cuántos puntos de diversión le quieres dar a la mascota?"));
        if (!isNaN(puntosDiversion)) {
          jugar(puntosDiversion);
        } else {
          console.log("Por favor ingresa un número válido.");
        }
        break;
        
      case '3':
       
        simularPasoDelTiempo();
        break;
        
      case '4':
        
        diagnosticoMascota();
        break;
        
      case '5':
       
        mostrarEstado();
        break;
        
      case '6':
       
        console.log(`¡Adiós! ${nombreMascota} te espera.`);
        return;  
        
      default:
        console.log("Opción no válida. Por favor elige una opción del 1 al 6.");
    }
  }
}


iniciarCuidado();
