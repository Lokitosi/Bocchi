module.exports = (client, member,message) => {
    // Nuevo miembro:
    member.guild.channels.cache.get("767877864409792516").send({embed: {
        color: 10181046 ,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        title: "Bienvenido al servidor!!",
        description:`Bienvenido ${member.user.username}!!`,
        image:{
            url:'https://steamuserimages-a.akamaihd.net/ugc/793132964862202279/441C9D18E40792C1382639EDA78BBADA4C77AD37/'
        },
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
        }
      }
  });
}