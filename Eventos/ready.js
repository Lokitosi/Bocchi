module.exports = (client) => {
    // estado:
    client.user.setPresence(
        {
            status: "online",
            activity: {
                name: `Watching your deepests thoughts `,
            }
        }
    );
}