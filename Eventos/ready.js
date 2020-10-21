module.exports = (client) =>{

    client.user.setPresence({
        status: "online",
        game:{
            name: "get friends",
            url: null,
            type: "Trying"
        }
    })
}