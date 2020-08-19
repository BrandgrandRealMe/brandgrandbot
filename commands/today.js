var ids = '531186390717825074';
const customisation = require('../customisation.json');
const snekfetch = require('snekfetch');
module.exports = {
  catagory: 'fun',
  name: 'today',
  description: 'Finds a historical event from today!',
  usage: 'today',
  execute: async (message, args, client, db, packageInfo, Discord) => {
                  const res = await snekfetch.get('http://history.muffinlabs.com/date')

                const data = JSON.parse(res.body)

                const source = data.data['Events']
                const event = source[Math.round(Math.random() * (source.length - 1))]

                const embed = new Discord.MessageEmbed()
                    .setAuthor(`Historical Event from ${data.date}, ${event.year}`)
                    .setColor('#B1AFFC')
                    .setDescription(event.text)
                    .addField('❯\u2000\Information', `•\u2000\**Year:** ${event.year}\n\•\u2000\**External Link${event.links.length !== 1 ? 's' : ''}:** ${event.links.map(l => `[${l.title}](${l.link})`).join(', ')}`);
        return message.channel.send({ embed });
  }
};