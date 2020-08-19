var ids = '531186390717825074';
const customisation = require('../customisation.json');
module.exports = {
  catagory: 'mod',
  name: 'announce',
  description: 'announce something.',
  usage: 'announce <announcement>',
  execute: async (message, args, client, db, packageInfo, Discord) => {
 let chx = db.get(`annchannel_${message.guild.id}`);
 if (!client.channels.cache.get(chx).permissionsFor(message.author).has('SEND_MESSAGES') && !ids.includes(message.author.id)) return;
   if (!args[0]) return message.reply('You need to imput a announce BOI');;
    if (args[0] === "bug") return message.reply("Please give a announce.");
    args = args.join(" ");
   message.delete();
  const embed = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.avatarURL())
  .setColor(0xFFFF00)
  .addField('ANNOUNCEMENT', args)
  .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);
  client.channels.cache.get(chx).send({embed});
  }
};