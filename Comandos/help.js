module.exports = (client, message, args) => {

    // Variables 
    const Discord = require("discord.js");
    message.channel.send('Lista de comandos');

    // Generar mensaje
    const embed = new Discord.MessageEmbed()
        .setAuthor(client.user.username, client.user.avatarURL())
        .addField('-doujin', 'Te recomienda un doujinshi aleatorio')
        .addField('-help', 'muestra todos los comandos')
        .addField('-oferta', 'Muestra ofertas laborales')
        .addField('-saludo', 'Bocchi te saluda')
        .addField('-mal', 'Te recomienda un anime aleatorio en My Anime List')
        .addField('-trabajo', 'busca ofertas laborales por las palabras dadas despues del comando')
        .setFooter("Version 0.5.1--Bocchi super fuerte de servicio", client.user.avatarURL())
        .setColor(16580705)
    message.channel.send(embed);
    
}