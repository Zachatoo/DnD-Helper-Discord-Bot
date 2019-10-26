module.exports = {
    name: 'helloworld',
    aliases: ['hi', 'hello', 'hiworld'],
    ownersOnly: false,
    guildOnly: false,
    removeFalsyArgs: false,
    requireArgs: false,
    deleteCommand: false,
    run: async (message, args) =>
      message.channel.send(`Hello World!`)
  };