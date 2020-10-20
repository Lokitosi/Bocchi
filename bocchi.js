// Parametros iniciales:
const Discord = require("discord.js"); // Const variable constante
const client = new Discord.Client();
const config = require("./config/config.json");
const scrapper = require("./funciones/scrapper")


//Variables:
let prefix = config.prefix;
// precauciones 
//if (!message.content.startsWith(prefix)) return;
//if (message.author.bot) return;

// Comandos
client.on('ready', () => {
    console.log("estoy viva");
});

client.on('message', (message) => {
    if (message.content.startsWith(prefix + 'Hola Bocchi')) {
        message.channel.send('Bocchi super fuerte de servicio <:bch1:767911341125795871>');
    }

});
// trabajo

client.on('message', (message) => {
    if (message.content.startsWith(prefix + 'Trabajo')) {
        scrapper.buscar();
        const embedDatos = new Discord.MessageEmbed()
            .setTitle("Oferta de empleo")
            .setColor(0x00AE86)
            .setThumbnail("https://lh3.googleusercontent.com/sSaqlEULxwyu2BnXSewoyWx8CP8TpoKvVWEW8izXRsw3lIYmGnSpwruU85WMvvTbK6k=s180")
            .setTimestamp()
            .addField(titulo,des)
            .addField("Lik", lin)
            .setFooter("Bocchi super fuerte de servicio", client.user.avatarURL())

        message.channel.send({ embed: embedDatos });
    }

});

client.login(config.token);