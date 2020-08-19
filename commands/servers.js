var ids = '531186390717825074';
const customisation = require('../customisation.json');
const db = require("quick.db")

module.exports = {
  catagory: 'owner',
  name: 'servers',
  description: 'get A List Of Servers The Bot Is In!',
  execute: async (message, args, client, db, packageInfo, Discord) => {
      if (!ids.includes(message.author.id)) return;
      const guilds = client.guilds.map(guild => {
return {
name: guild.name,
channels: guild.channels.map(channel => {
if (channel.type == "category") return chalk.red(">> Category: ") + chalk.gray(channel.name);
if (channel.type == "voice") return chalk.white(">> Voice: ") + chalk.gray(channel.name);
if (channel.type == "text") return chalk.white(">> Text: ") + chalk.gray(`#${channel.name}`);
})
};
});
guilds.forEach(info => {
console.log(chalk.blue.bgRed.bold(">>>>>>>>>>>>>>>>>> Guild ") + chalk.gray(info.name));
console.log(info.channels.join("\n"));
console.log(chalk.gray('----------------'));
});
  }
};