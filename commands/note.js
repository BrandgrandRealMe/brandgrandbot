var ids = '531186390717825074';
const customisation = require('../customisation.json');
module.exports = {
  catagory: 'util',
  name: 'note',
  description: 'Adds A Note To <#745365669671075881>',
  usage: 'suggest <suggestion>',
  execute: async (message, args, client, db, packageInfo, Discord) => {
   if (!args[0]) return message.reply('You need to imput a Message BOI');
    args = args.join(" ");
    if (ids.includes(message.author.id)) {
      const embed = new Discord.MessageEmbed()
        .setColor(7506394)
        .addField("<:logo:744624310294937672> " + message.author.username + " (BOT OWNER) Added Note:", args)
        .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);
      message.reply("Posted Your Note To <#745365669671075881>!");
      client.channels.cache.get(customisation.devnotes).send(embed);
      client.channels.cache.get(customisation.notes).send(embed);
      message.delete();
    }
    else{
    const embed = new Discord.MessageEmbed()
      .addField(message.author.username + " Added Note:", args)
      .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);
      message.reply("Posted Your Note To <#745365669671075881>!");
      client.channels.cache.get(customisation.notes).send(embed)
    }
  }
};