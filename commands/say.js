var ids = '531186390717825074';
const customisation = require('../customisation.json');
module.exports = {
  catagory: 'fun',
  name: 'say',
  description: 'Say somthing In A Embed',
  aliases: ['echo'],
  execute: async (message, args, client, db, packageInfo, Discord) => {
    if (!args[0]) return message.reply('You need to imput a Message BOI');
    args = args.join(" ");
    if (ids.includes(message.author.id)) {
      const embed = new Discord.MessageEmbed()
        .setColor(7506394)
        .addField("<:logo:744624310294937672> " + message.author.username + " (BOT OWNER) Says:", args)
        .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);
      message.channel.send(embed);
      message.delete();
    }
    else{
    const embed = new Discord.MessageEmbed()
      .addField(message.author.username + " Says:", args)
      .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);
    message.channel.send(embed);}
  }
};