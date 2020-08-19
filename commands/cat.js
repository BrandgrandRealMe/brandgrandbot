var ids = '531186390717825074';
const customisation = require('../customisation.json');
var randomCat = require('random-cat');
module.exports = {
  catagory: 'fun',
  name: 'cat',
  description: 'Get A Random Image Of A Cat!',
  usage: 'cat <dummyText>',
  execute: async (message, args, client, db, packageInfo, Discord) => {
if (!args[0])
var url = randomCat.get();
else
var url = randomCat.get({
  dummyText: args
});
      if (ids.includes(message.author.id)) {
      const embed = new Discord.MessageEmbed()
        .setColor(7506394)
        .setTitle("<:logo:744624310294937672> " + message.author.username + " (BOT OWNER) | Here Is A Cat!")
        .setImage(url)
        .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);
      message.channel.send(embed);
      message.delete();
    }
    else{
    const embed = new Discord.MessageEmbed()
   	.setTitle(message.author.username + " | Here Is A Cat!")
	  .setImage(url)
      .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);
    message.channel.send(embed);}
  }
};