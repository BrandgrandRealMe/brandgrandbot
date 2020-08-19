var ids = '531186390717825074';
const customisation = require('../customisation.json');
module.exports = {
  catagory: 'bot',
  name: 'bug',
  description: 'Reports a bug.',
  usage: 'bug <bug>',
  execute: async (message, args, client, db, packageInfo, Discord) => {
      if (!args[0]) return message.reply("Please specify the bug. Example:\n`/invite Is not sending a msg!`");
    if (args[0] === "bug") return message.reply("Please specify the bug. Example:\n`/invite Is not sending a msg!`");
    args = args.join(" ");
    message.reply("Thanks for submitting a bug!");
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) reported:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
          const embed = new Discord.MessageEmbed()
  .setColor(0xFFFF00)
  .addField('MEMBER', message.author.toString())
  .addField('BUG', args)
  .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);
  message.delete().catch(O_o=>{}); 
    client.channels.cache.get(customisation.votechannelid).send(embed)
                .then(function (message) {
              message.react("👍")
              message.react("👎")
            }).catch(function() {
              //Something
             });
    client.channels.cache.get(customisation.bugchannelid).send(content)
  }
};