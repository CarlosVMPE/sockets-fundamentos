var socket = io();

// on: para escuchar

socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
// emit: para emitir un evento
socket.emit('enviarMensaje', {
    usuario: 'Carlos',
    mensaje: 'Hola mundo'
}, function (resp) {
    console.log('Respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor: ', mensaje);
});