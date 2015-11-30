// Evento que se genera cuando se recibe un mensaje
onmessage = function (msje) {
    // Implementacion del proceso
    var total = 0;
    for (var i = msje.data, il = 100; i<il; i++) {
        total += i;
    }
    // Envio del mensaje hacia el hilo principal
    postMessage(total);
}