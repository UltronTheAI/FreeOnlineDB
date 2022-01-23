const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });


var dataJ = {};

app.get('/', (req, res) => {
    res.send('Socket System Use Python Module, IT`s on Github <a href="https://raw.githubusercontent.com/UltronTheAI/FreeOnlineDB/main/FreeOnlineDB.py">File</a>');
});

server.listen(process.env.PORT || 5000);

io.on("connection", (socket) => {
    console.log("User connected... user id = " + socket.id);
    

    socket.on("insert", (url) => {
        var q = url[0];
        var email = url[1];
        var password = url[2];
        var v = url[3];
        var data = url[4];

        if (dataJ[email] == undefined) {
            socket.emit('result', 'Login Error'); 
        }
        else {
            var cp = dataJ[email].password;
            if (cp == password) {
                dataJ[email][v] = data;
                socket.emit('result', 'Done');
            }
        }
    });

    socket.on("delete", (url) => {
        var q = url[0];
        var email = url[1];
        var password = url[2];
        var v = url[3];
        var data = url[4];

        if (dataJ[email] == undefined) {
            socket.emit('result', 'Login Error'); 
        }
        else {
            var cp = dataJ[email].password;
            if (cp == password) {
                delete dataJ[email][v];
                socket.emit('result', 'Done');
            }
        }
    });

    socket.on("get", (url) => {
        var q = url[0];
        var email = url[1];
        var password = url[2];
        var v = url[3];
        var data = url[4];

        if (dataJ[email] == undefined) {
            socket.emit('result', 'Login Error'); 
        }
        else {
            var cp = dataJ[email].password;
            if (cp == password) {
                var vat = dataJ[email][v];
                socket.emit('result', vat);
            }
        }
    });

    socket.on("login", (url) => {
        // console.log(url);
        var q = url[0];
        var email = url[1];
        var password = url[2];
        // var v = url[3];
        // var data = url[4];

        if (dataJ[email] == undefined) {
            var cp = dataJ[email];
            if (cp == undefined) {
                dataJ[email] = {};
                dataJ[email].password = password;
                socket.emit('result', 'Done');
            }
            else {
                socket.emit('result', 'Login Error');
            }
        }
        else {
            socket.emit('result', 'Login Error'); 
        }
    });

    socket.on("remove", (url) => {
        var q = url[0];
        var email = url[1];
        var password = url[2];
        var v = url[3];
        var data = url[4];

        if (dataJ[email] == undefined) {
            socket.emit('result', 'Login Error'); 
        }
        else {
            var cp = dataJ[email];
            if (cp == undefined) {
                // dataJ[email] = {};
                // dataJ[email].password = password;
                socket.emit('result', 'Login Error');
            }
            else {
                delete dataJ[email];
                socket.emit('result', 'Done');
            }
        }
    });

    socket.on("ox33", (url) => {
        var q = url[0];
        var email = url[1];
        var password = url[2];
        var v = url[3];
        var data = url[4];

        socket.emit('result', dataJ);
    });
    
    socket.on('disconnect', () =>{
        
    });
    
});

// setInterval(() => {console.log(dataJ)}, 3000)
