var ids = '531186390717825074';
const customisation = require('../customisation.json');
module.exports = {
  catagory: 'fun',
  name: 'lxve',
  description: 'Inside Joke In Discord Bots',
  aliases: ['end'],
  execute: async (message, args, client, db, packageInfo, Discord) => {
  const embed = new Discord.MessageEmbed()
	.setTitle(message.author.username + " DISASTER STRUCK")
	.setImage('https://cdn.discordapp.com/attachments/110373943822540800/744610902103294122/image0.png');
  message.channel.send(embed);
  }
};