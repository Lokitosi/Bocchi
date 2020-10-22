module.exports = (client) => {
  client.user.setPresence(
      {
          status: "online",
          activity:{
              name: `Watching your deepests thoughts `,
          }
      }
  );
}