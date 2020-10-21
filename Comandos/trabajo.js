const cheerio = require('cheerio');
const fs = require('fs');
const request = require('request');
const Discord = require("discord.js");
var links = [];
var titulos = [];
var desc = [];
function buscar() {
    request('https://www.computrabajo.com.co/trabajo-de-panadero?q=panadero', (err, res, body) => {

        if (!err && res.statusCode == 200) { // si no hay error entonces ..
            let $ = cheerio.load(body);// me carga el cuerpo de la pagina

            $('a.js-o-link', '#p_ofertas').each(function () {
                titulos.push($(this).text());// se lleva todos los links
            })
            $('p', '#p_ofertas').each(function () {
                desc.push($(this).text());// se lleva todos los links
            })
            $('a.js-o-link', '#p_ofertas').each(function () {
                links.push($(this).attr('href'));// se lleva todos los links
            })
        }
    })

}
function getTitulos() {
    return titulos;
}
function getDesc() {
    return desc;
}
function getLinks() {
    return links;
}
buscar();

module.exports = (client, message, args) => {
    buscar();
    let til = getTitulos()
    let des = getDesc()
    let lin = getLinks()
    const embedDatos = new Discord.MessageEmbed()
        .setTitle("Oferta de empleo")
        .setColor(0x00AE86)
        .setThumbnail("https://lh3.googleusercontent.com/sSaqlEULxwyu2BnXSewoyWx8CP8TpoKvVWEW8izXRsw3lIYmGnSpwruU85WMvvTbK6k=s180")
        .setTimestamp()
        .addField(til[0], des[0])
        .addField("Link", "https://www.computrabajo.com.co" + lin[0])
        .setFooter("Bocchi super fuerte de servicio", client.user.avatarURL())

    message.channel.send({ embed: embedDatos });
}

