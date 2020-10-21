// Parametros iniciales:
const Discord = require("discord.js"); // Const variable constante
const client = new Discord.Client();
let { readdirSync } = require('fs');
//archivo configuraciones :
client.config = require("./config/config.js");

client.comandos = new Discord.Collection();

// Controlador de comandos

for (const file of readdirSync('./Comandos/')){
    if (file.endsWith(".js")){
        // recolecta solo el nombre sin el .js
        let fileName = file.substring(0,file.length-3);
        // exporta el comando 
        let fileContents = require(`./Comandos/${file}`);

        // agraga el nombre del comando a la coleccion de comandos
        client.comandos.set(fileName, fileContents);
    }
}

// Controlador de eventos:

// se llama a la carpeta eventos
for(const file of readdirSync('./Eventos/')){
    if(file. endsWith(".js")){
        // recolecta solo el nombre sin el .js
        let fileName = file.substring(0,file.length-3);
        // exporta el comando 
        let fileContents = require(`./Eventos/${file}`);

        // cuando se activa el evento se exporta la funcion y se le pasa el cliente .
        client.on(fileName , fileContents.bind(null , client));

        // elimina memoria cache
        delete require.cache[require.resolve(`./Eventos/${file}`)];
    }
}
// login

//inicia sesion
client.login(client.config.token).then(()=>{
    console.log(`Estoy listo, soy ${client.user.tag}`);
}).catch((err)=>{
    //Error?
    console.error("Error al iniciar sesion: "+err);
})