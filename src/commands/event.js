module.exports = {
    name: 'event',
    aliases: ['e', 'newevent'],
    ownersOnly: false,
    guildOnly: false,
    removeFalsyArgs: false,
    requireArgs: false,
    deleteCommand: true,
    run: async (message, args) => {
        if (args.length === 0) {
            message.author.send('\`\`\`Incorrect syntax, see !event help for more info.\`\`\`');
        }
        else if (args[0].toLowerCase() === 'help') {
            message.author.send('\`\`\`Command Syntax: !event {name} {days}\n'
                + '{name} can be as long as you like, with or without spaces.\n'
                + '{days} must include any of the following letters, with no spaces:\n'
                + 'M T W R F S (representing days of the week).\n\`\`\`'
                + '***Example***: !event Movie Night TWR'
                )
        }
        else {
            var host = message.member.user.tag;

            var eventDays = (args.length > 1) ? [...args.pop()] : null;
            var eventName = args.join(' ');

            if (!!eventDays) {
                for (let i = 0; i < eventDays.length; ++i)
                {
                    eventDays[i] = (eventDays[i].toLowerCase() === 'm') ? '🇲'
                        : (eventDays[i].toLowerCase() === 't') ? '🇹'
                        : (eventDays[i].toLowerCase() === 'w') ? '🇼'
                        : (eventDays[i].toLowerCase() === 'r') ? '🇷'
                        : (eventDays[i].toLowerCase() === 'f') ? '🇫'
                        : (eventDays[i].toLowerCase() === 's') ? '🇸'
                        : '❓';
                }
                message.channel.send(`Event hosted by *${host}*\n`);
                message.channel.send(`\`\`\`EVENT: ${eventName}\nDAYS HOST IS AVAILABLE:\`\`\``)
                    .then(react => {
                        eventDays.forEach(e => {
                            react.react(e);
                        })
                    });
            }
            else {
                message.channel.send('\`\`\`Incorrect syntax, see !EVENT help for more info.\`\`\`');
            }
        }
    }
};