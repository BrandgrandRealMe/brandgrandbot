var ids = '531186390717825074';
const customisation = require('../customisation.json');
module.exports = {
  catagory: 'util',
  name: 'emotes',
  description: 'get a list of emotes!',
  usage: 'emotes',
  execute: async (message, args, client, db, packageInfo, Discord) => {
		const emojis = message.guild.emojis.cache
		if (!emojis.size) return message.say(`This server has no ${type} custom emoji.`);
    message.channel.send("Click On Emote To View Info!");
		return message.channel.send(emojis.map(emoji => emoji.toString()).sort().join("\n"), { split: { char: ' ' } })
  }
};