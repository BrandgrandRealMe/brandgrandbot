const customisation = require('../customisation.json');
module.exports = {
  catagory: 'bot',
  name: 'suggest',
  description: 'Suggests something.',
  usage: 'suggest <suggestion>',
  execute: async (message, args, client, db, packageInfo, Discord) => {
   if (!args[0]) return message.reply('You need to imput a Suggestion BOI');;
    if (args[0] === "bug") return message.reply("Please give a suggestion.");
    args = args.join(" ");
        let embed = new Discord.MessageEmbed()
    .setTitle(message.author.username)
    .setColor("#AA9900")
    .addField("Suggestion:", args)
    .addField("server:", message.guild.name)
    .setFooter(`/suggest`);

    message.reply("Thanks for suggesting something!");
    const content = `**${message.author.username}#${message.author.discriminator}** (${message.author.id}) suggested:\n~~--------------------------------~~\n${args}\n~~--------------------------------~~\nOn the server: **${message.guild.name}**\nServer ID: **${message.guild.id}**`;
    client.channels.cache.get(customisation.suggestionlogchannelid).send(`${content}`);
         const time = 60000 //amount of time to collect for in milliseconds
    client.channels.cache.get(customisation.suggestionchannelid).send(embed)
 .then(async function (message) {
      await message.react(`743667283469140038`)
      await message.react(`743667283150372895`)
      });
  }
};