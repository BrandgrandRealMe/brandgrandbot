var ids = '531186390717825074';
const customisation = require('../customisation.json');
module.exports = {
  catagory: 'fun',
  name: 'slowdown',
  description: 'Say Slowdown',
  aliases: ['sd'],
  execute: async (message, args, client, db, packageInfo, Discord) => {
        if (ids.includes(message.author.id)) {
      const embed = new Discord.MessageEmbed()
        .setColor(7506394)
        .setTitle("<:logo:744624310294937672> " + message.author.username + " (BOT OWNER) Says:")
        .setImage('https://fontmeme.com/permalink/200816/39925aa54aa9006ea35aadce061134ba.png')
        .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);
      message.channel.send(embed);
      message.delete();
    }
    else{
    const embed = new Discord.MessageEmbed()
   	.setTitle(message.author.username + " Says:")
	  .setImage('https://fontmeme.com/permalink/200816/39925aa54aa9006ea35aadce061134ba.png')
      .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);
    message.channel.send(embed);}
  }};