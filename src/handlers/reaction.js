const hasPermission = require('../util/hasPermission');
const serializer = require('../util/serializer');


const filter = (reaction, user) => {
    return reaction.emoji.name === '👌' && user.id === message.author.id;
};

const collector = message.createReactionCollector(filter);

collector.on('collect', (reaction, reactionCollector) => {
    console.log('Collected ${reaction.emoji.name}');
});

collector.on('end', collected => {
    console.log('Collected ${collected.size} items');
});

module.exports = async message => {
  if (message.author.bot) return;

  const responses = parseMessageContent(message)
    .map(content => ({ message, content }))
    .filter(startsWithPrefix)
    .map(processCommand)
    .filter(Boolean);
  if (!responses.length) return;

  await serializer(responses.map(r => r.fn));
  if (
    message.channel.type === 'text' &&
    hasPermission(message, 'MANAGE_MESSAGES') &&
    responses.some(r => r.deleteCommand)
  )
    message.delete();
};
