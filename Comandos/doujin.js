module.exports = (client, message, args) => {
    //variables: 
    const cheerio = require('cheerio');
    const request = require('request');
    message.channel.send('La recomendacion del dia');
    message.channel.send('<a:loading:768805475025551450>.');

    //numero aleatorio:
    function aleatorio(a, b) {
        return Math.round(Math.random() * (b - a) + parseInt(a));
    }

    //enviar el mensaje:
    function intento(num) {
        request('https://nhentai.to/g/' + num, (err, res, body) => {

            if (!err && res.statusCode == 200) {
                message.channel.bulkDelete(1);
                message.channel.send('https://nhentai.to/g/' + a);
            } else {
                a = aleatorio(100000, 500000);
                intento(a);
            }
        }
        )
    }

    a = aleatorio(100000, 500000);
    intento(a);
}