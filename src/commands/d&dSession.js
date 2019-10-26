module.exports = {
    name: 'd&d',
    aliases: ['d', 'session'],
    ownersOnly: true,
    guildOnly: false,
    removeFalsyArgs: false,
    requireArgs: false,
    deleteCommand: true,
    run: async (message, args) => {
        if (args.length === 0) {
            message.channel.send('\`\`\`Incorrect syntax, see !D&D help for more info.\`\`\`');
        }
        else if (args[0].toLowerCase() === 'help') {
            message.channel.send('\`\`\`Command Syntax: !D&D {name} {days}\n'
                + '{name} can be as long as you like, with or without spaces.\n'
                + '{days} must include any of the following letters, with no spaces:\n'
                + 'M T W R F S (representing days of the week).\n\`\`\`'
                + '***Example***: !D&D Lost Mines of Phandelver RFS'
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
                message.channel.send(`\`\`\`D&D SESSION: ${eventName}\nDAYS DM IS AVAILABLE:\`\`\``)
                    .then(react => {
                        eventDays.forEach(e => {
                            react.react(e);
                        })
                    });
            }
            else {
                message.channel.send('\`\`\`Incorrect syntax, see !D&D help for more info.\`\`\`');
            }
        }
    }
};