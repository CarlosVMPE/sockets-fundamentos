const { io } = require('../server');

// Conexion
io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Adminstrador',
        mensaje: 'Bievenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        //console.log(mensaje);
        /*
        if (mensaje.usuario) {
            callback({
                resp: 'Todo salió bien'
            });
        } else {
            callback({
                resp: 'Todo salió mal'
            });
        }*/
    });
});