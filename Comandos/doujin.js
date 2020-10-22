module.exports = (client, message, args) => {
    const cheerio = require('cheerio');
    const request = require('request');
    message.channel.send('La recomendacion del dia <a:loading:768805475025551450>');
    function aleatorio(a, b) {
        return Math.round(Math.random() * (b - a) + parseInt(a));
    }

    a = aleatorio(100000, 500000);
    intento(a);
    function intento(num) {
        request('https://nhentai.to/g/' + num, (err, res, body) => {

            if (!err && res.statusCode == 200) {
                message.channel.send('https://nhentai.to/g/' + a);
            } else {
                a = aleatorio(100000, 500000);
                intento(a);
            }
        }
        )
    }
}