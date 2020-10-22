module.exports = async (client, message, args) => {

    const cheerio = require('cheerio');
    const fs = require('fs');
    const request = require('request');
    const Discord = require("discord.js");
    var links = [];
    var titulos = [];
    var desc = [];
    let palabra = args.join(' ');
    if (!palabra) return message.channel.send('Debe escribir un mensaje.')

    function buscar(palabra) {
        request('https://www.computrabajo.com.co/trabajo-de-' + palabra + '?q=' + palabra, (err, res, body) => {

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



    buscar(palabra);
    let til = getTitulos()
    let des = getDesc()
    let lin = getLinks()
    let oferta = 1;
    function generarOferta(res) {
        let embedDatos = new Discord.MessageEmbed()
            .setTitle("Oferta de empleo")
            .setColor(0x00AE86)
            .setThumbnail("https://lh3.googleusercontent.com/sSaqlEULxwyu2BnXSewoyWx8CP8TpoKvVWEW8izXRsw3lIYmGnSpwruU85WMvvTbK6k=s180")
            .setTimestamp()
            .addField(til[res], des[res])
            .addField("Link", "https://www.computrabajo.com.co" + lin[res])
            .setFooter("Bocchi super fuerte de servicio", client.user.avatarURL())
        return message.channel.send({ embed: embedDatos });
    }
    async function verReaccion(reaction) {
        if (reaction.emoji.name === '➡️') {
            m1.delete();
            oferta = oferta + 1;
            m1 = await generarOferta(oferta + 1)
            await m1.react('⬅️')
            await m1.react('❎')
            await m1.react('➡️')
            const filter = (reaction, user) => {
                return ['➡️', '❎', '⬅️'].includes(reaction.emoji.name) && user.id === message.member.id;
            };
            m1.awaitReactions(filter, { max: 1, time: 120000, errors: ['time'] })
                .then(async collected => {
                    const reaction = collected.first();
                    verReaccion(reaction);
                })
        } else if (reaction.emoji.name === '⬅️') {
            m1.delete();
            oferta = oferta - 1;
            if (oferta === 1) {
                m1 = await generarOferta(oferta)
                await m1.react('❎')
                await m1.react('➡️')
                const filter = (reaction, user) => {
                    return ['➡️', '❎'].includes(reaction.emoji.name) && user.id === message.member.id;
                };
                m1.awaitReactions(filter, { max: 1, time: 120000, errors: ['time'] })
                    .then(async collected => {
                        const reaction = collected.first();
                        verReaccion(reaction);
                    })
            } else {
                m1 = await generarOferta(oferta)
                await m1.react('⬅️')
                await m1.react('❎')
                await m1.react('➡️')
                const filter = (reaction, user) => {
                    return ['➡️', '❎', '⬅️'].includes(reaction.emoji.name) && user.id === message.member.id;
                };
                m1.awaitReactions(filter, { max: 1, time: 120000, errors: ['time'] })
                    .then(async collected => {
                        const reaction = collected.first();
                        verReaccion(reaction);
                    })
            }
        } else {
            message.channel.send('Un gusto ayudar <a:44:768643221734817822>');
        }

    }
    var m1;
    m1 = await generarOferta(oferta)
    await m1.react('❎')
    await m1.react('➡️')
    const filter = (reaction, user) => {
        return ['➡️', '❎'].includes(reaction.emoji.name) && user.id === message.member.id;
    };
    m1.awaitReactions(filter, { max: 1, time: 120000, errors: ['time'] })
        .then(async collected => {
            const reaction = collected.first();
            verReaccion(reaction);
        })
}
