var ids = '531186390717825074';
const customisation = require('../customisation.json');
module.exports = {
  catagory: 'fun',
  name: 'hey',
  description: 'Say Hey',
  aliases: ['hello'],
  execute: async (message, args, client, db, packageInfo, Discord) => {
      if (ids.includes(message.author.id)) {
      const embed = new Discord.MessageEmbed()
        .setColor(7506394)
        .setTitle("<:logo:744624310294937672> " + message.author.username + " (BOT OWNER) Says:")
        .setImage('https://fontmeme.com/permalink/200816/8300d7bbff9e80375eb8893d8912c3d4.png')
        .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);
      message.channel.send(embed);
      message.delete();
    }
    else{
    const embed = new Discord.MessageEmbed()
   	.setTitle(message.author.username + " Says:")
	  .setImage('https://fontmeme.com/permalink/200816/8300d7bbff9e80375eb8893d8912c3d4.png')
      .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);
    message.channel.send(embed);}
}};