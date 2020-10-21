module.exports = (client, message, args) => {
    message.channel.send('La recomendacion del dia');
        function aleatorio(a,b) {
            return Math.round(Math.random()*(b-a)+parseInt(a));
            }
        a = aleatorio(100000,500000);
        message.channel.send("https://nhentai.to/g/"+a);
}