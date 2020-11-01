const Discord = require('discord.js');
const bot = new Discord.Client();

var express = require('express');
var app = express();

// var mysql = require('mysql');
// var db = mysql.createConnection({
//     host: 'tw-1.zentring.net',
//     user: 'admin_rirto0627',
//     password: 'jihg2689',
//     port: 3306
// });
//
// function connectDB(data) {
//     db.query('USE admin_Discord', function (err) {
//         if (err)
//             console.log('use error');
//     });
//     db.query('select * from access ;', function (err, results, fields) {
//
//         if (err)
//             console.log("mysql error");
//         // console.log(results[0][data]);
//         return results[0][data]
//     });
//     db.end();
//
// }

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
    app.get('/', function (req, res) {

        res.send(`${bot.user.tag}`);
    })

    var server = app.listen(1150, function () {

        var host = server.address().address
        var port = server.address().port

        console.log("Example app listening at http://127.0.0.1", host, port)

    })

});

bot.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});

bot.login('NzY3MzI4MTEzOTg1MzIzMDA5.X4wT_g.G_pApuv-EOY127XwMyB1H5wALoU')