module.exports = (client, member,message) => {
    // Nuevo miembro:
    member.guild.channels.cache.get("767877864409792516").send({embed: {
        color: 10181046 ,
        author: {
            name: client.user.username,
            icon_url: client.user.avatarURL()
        },
        title: "Alguien nos abandono",
        description:`Si se fue no valia la pena`,
        image:{
            url:'https://pm1.narvii.com/6727/ba6c3ceb1c8531dc45762bfcde8f9053dd403fa1v2_hq.jpg'
        },
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
        }
      }
  });
}