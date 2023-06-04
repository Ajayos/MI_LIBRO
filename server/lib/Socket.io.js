/**
 * Socket 
 *
 * @project : MI LIBRO
 * @version : 1.0.2
 * @link : https://github.com/Ajayos/MI_LIBRO
 * @authors : Ajay, Akarsh, Abinas, Saran, Yasir
 * @created : 2023-05-18 18:23:36
 * @modified : 2023-06-03 14:30:42
 * @editor : Ajayos
 * @file : socket.io.js
 * @path : /libr/socket.ior.js
 *
 * Description: socket io handiler.
 *
 * GitHub Repository: https://github.com/Ajayos/MI_LIBRO
 *
 * All rights reserved. (C) 2023 Ajayos and co-authors (Akarsh, Abinas, Saran, Yasir)
 */

module.exports = socket_io = async function(io) {
    const users = {}; 
    io.on('connection', socket => {
        socket.on('chat-new-user-joined', name =>  {
            users[socket.id] = name;
            socket.broadcast.emit('chat-user-joined', name);
            socket.emit('chat-you-joined', name);
        });
        function mk() {
            socket.emit('chat-bot', {message: 'ada parayadaaaaa', name: 'bot'})
            socket.broadcast.emit('chat-bot', {message: 'ada parayadaaaaa', name: 'bot'})
        }
        socket.on('chat-send', message => {
            if(users[socket.id] == undefined || users[socket.id] == null) return socket.emit('chat-user-er')
            socket.broadcast.emit('chat-receive', {message: message, name: users[socket.id]})
            
            if(message == 'hlo') {mk()}
        });
        socket.on('chat-disconnect', message =>{
            socket.broadcast.emit('chat-left', users[socket.id]);
            delete users[socket.id]; 
        });
    });
}