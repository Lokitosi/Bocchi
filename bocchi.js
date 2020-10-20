// Parametros iniciales:
const Discord = require("discord.js"); // Const variable constante
const client = new Discord.Client();
const config = require("./config.json");

//Variables:
let prefix = config.prefix;
// precauciones 
if (!message.content.startsWith(prefix)) return;
if (message.author.bot) return;

// Comandos
client.on('ready',() => {
    console.log("estoy viva");
});

client.on('message',(message) => {
    if(message.content.startsWith(prefix + 'Hola Bocchi')){
        message.channel.send('Bocchi super fuerte de servicio <:bch1:767911341125795871>');
    }

});

client.login(config.token);