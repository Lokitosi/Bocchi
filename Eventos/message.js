module.exports = (client, message) =>{
    //precauciones iniciales
    if (!message.content.startsWith(client.config.prefix)) return;
    if (message.author.bot) return;
    // argumentos y comandos:
    // recibe el prefijo del mensaje
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g); 
    // toma el comando
    const command = args.shift().toLowerCase();

    // manejo de eventos
    // ejecuta el comando dado
    let cmd = client.comandos.get(command);
    if(!cmd) return;
    
    //ejecucion de el comando enviando el cliente , mensaje y los argumentos
    cmd(client,message,args);
}