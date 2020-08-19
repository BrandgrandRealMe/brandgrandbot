var ids = '531186390717825074';
const customisation = require('../customisation.json');
const update = require('../data/update.json');
module.exports = {
  catagory: 'owner',
  name: 'update',
  description: 'Get Change logs',
  usage: 'update',
  execute: async (message, args, client, db, packageInfo, Discord) => {
    const embed = new Discord.MessageEmbed()
      .setTitle('Brandgrand!bot Update 3.0')// the ‎ does not show up i think
      .setDescription('Brandgrand!bot Is A Bot Made by Brandgrand!real It is written with Discord.js.');
    if (!ids.includes(message.author.id)) return;
    if (!args[0]){
      message.channel.send(`${message.author.toString()} What Update?`);}
    else if (args[0] == "3.0") {

      for (i in update.ver3) {
        info = update.ver3[i];
        embed.addField('---', info)
      }
    }
    message.channel.send(embed);
  }
};