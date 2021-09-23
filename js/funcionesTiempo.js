// ejecutar una accion despues de un tiempo

let contador = 1;

function saludar(){
    if(contador <= 5){
        document.write('Hola comision');
        contador++
    }else{
        clearInterval(indentificador);
    }
}

// window.setTimeout(saludar, 5000);
setTimeout(() => {
    document.write('Hola mundo');
}, 3000);

let indentificador = window.setInterval(saludar, 3000);

