const express = require('express');
const app = express();
const server = require('http').createServer(app);

var dataJ = {};

app.get('/', (req, res) => {
    // res.send(req.url.replace('hi', 'hihi'));
    var url = req.url.replace('/?', '');
    url = url.replaceAll('%20', ' ').split(' ');
    // url[1] = url[1].replaceAll('\\"', '"');
    // url = JSON.parse(url[1]);
    // q
    // { login, remove, insert, delete, get }
    // data
    var q = url[0];
    var email = url[1];
    var password = url[2];
    var v = url[3];
    var data = url[4];
    // console.log(q);
    // login
    // res.send(q);
    if (q == 'insert') {
        if (dataJ[email] == undefined) {
            res.send('Login Error'); 
        }
        else {
            var cp = dataJ[email].password;
            if (cp == password) {
                dataJ[email][v] = data;
                res.send('Done');
            }
        }
    }
    if (q == 'delete') {
        if (dataJ[email] == undefined) {
            res.send('Login Error'); 
        }
        else {
            var cp = dataJ[email].password;
            if (cp == password) {
                delete dataJ[email][v];
                res.send('Done');
            }
        }
    }
    if (q == 'get') {
        if (dataJ[email] == undefined) {
            res.send('Login Error'); 
        }
        else {
            var cp = dataJ[email].password;
            if (cp == password) {
                var vat = dataJ[email][v];
                res.send(vat);
            }
        }
    }
    if (q == 'login') {
        if (dataJ[email] == undefined) {
            var cp = dataJ[email];
            if (cp == undefined) {
                dataJ[email] = {};
                dataJ[email].password = password;
                res.send('Done');
            }
            else {
                res.send('Login Error');
            }
        }
        else {
            res.send('Login Error'); 
        }
    }
    if (q == 'remove') {
        if (dataJ[email] == undefined) {
            res.send('Login Error'); 
        }
        else {
            var cp = dataJ[email];
            if (cp == undefined) {
                // dataJ[email] = {};
                // dataJ[email].password = password;
                res.send('Login Error');
            }
            else {
                delete dataJ[email];
                res.send('Done');
            }
        }
    }
    if (q == 'ox33') {
        res.send(dataJ);
    }
});

// setInterval(() => {console.log(dataJ)}, 5000)

server.listen(process.env.PORT || 5000);
