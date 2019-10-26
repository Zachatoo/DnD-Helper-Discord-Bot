module.exports = {
  token: ('TOKEN' in process.env ? process.env : require('../config')).TOKEN,
  prefix: '!',
  commandDelimiter: '\n',
  commandLimit: '5',
  owners: ['106998439912431616']
};
