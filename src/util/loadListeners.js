const handler = event => require(`../handlers/${event}`);

module.exports = client => {
  client.once('ready', () => handler('ready')(client));
  client.on('message', handler('message'));
  //client.on('reaction', handler('reaction'));
  process.on('unhandledRejection', console.warn);
};
