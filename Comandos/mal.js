const { MessageManager } = require('discord.js');

module.exports = (client, message, args) => {
    //variables:
    const cheerio = require('cheerio');
    const request = require('request');

    //mensajes de inicio:
    message.channel.send('La recomendacion del dia');
    message.channel.send('<a:loading:768805475025551450>.');

    // Numero aleatorio:
    function aleatorio(a, b) {
        return Math.round(Math.random() * (b - a) + parseInt(a));
    }

    //Enviar recomendacion:
    function intento(num) {
        request('https://myanimelist.net/anime/'+ num, (err, res, body) => {

            if (!err && res.statusCode == 200) {
                message.channel.bulkDelete(1);
                message.channel.send('https://myanimelist.net/anime/' + num);
            } else {
                a = aleatorio(1,40750);
                intento(a);
            }
        }
        )
    }
    //basic
    a = aleatorio(1,40750);
    intento(a);
}