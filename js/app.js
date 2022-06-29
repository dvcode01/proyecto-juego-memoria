// variables a usar
let aciertos = 0;
let movimientos = 0;
let tiempo = 30;
let tarjetaSeleccionada = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let value1 = null;
let value2 = null;
let timer = false;
let timeInterval = null;
let tiempoInicial = 30;



// pares aleatorios
let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numeros = numeros.sort(() => Math.random() - 0.5);
console.log(numeros);

// selectores
const aciertosElement = document.getElementById('aciertos');
const movimientosElement = document.getElementById('movimientos');
const tiempoElement = document.getElementById('tiempo');


function destapar(id){
    tarjetaSeleccionada++;
    if(timer == false){
        timeGame();
        timer = true;
    }
    
    if(tarjetaSeleccionada === 1){
        tarjeta1 = document.getElementById(id);
        value1 = numeros[id];
        tarjeta1.textContent = value1;
        tarjeta1.disabled = true;

    }else if(tarjetaSeleccionada === 2){
        tarjeta2 = document.getElementById(id);
        value2 = numeros[id];
        tarjeta2.textContent = value2;
        tarjeta2.disabled = true;
        movimientos++;
        movimientosElement.textContent = `Movimientos: ${movimientos}`;

        if(value1 == value2){
            tarjetaSeleccionada = 0;
            aciertos++;
            aciertosElement.textContent = `Aciertos : ${aciertos}`;

            if(aciertos === 8){
                clearInterval(timeInterval);
                aciertosElement.textContent = `Aciertos: ${aciertos} 😱`;
                tiempoElement.textContent = `Fantastico! 🎉 solo tardaste ${tiempoInicial - tiempo} segundos`;
                movimientosElement.textContent = `Movimientos: ${movimientos} 😎🔥`;
            }
        }else{
            setTimeout(() => {
                tarjeta1.textContent = '';
                tarjeta2.textContent = '';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetaSeleccionada = 0;
            }, 800);
        }
    }
    
}

function timeGame(){
    timeInterval = setInterval(() => {
        tiempo--;
        tiempoElement.textContent = `Tiempo: ${tiempo} segundos`;
        if(tiempo == 0){
            clearInterval(timeInterval);
            bloquearTarjetas();
        }
    }, 1000);

}

function bloquearTarjetas(){
    for (let i = 0; i <= 15; i++) {
        const tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.textContent = numeros[i];
        tarjetaBloqueada.disabled = true;
    }
}