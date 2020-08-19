var ids = '531186390717825074';
const dadjoke = require('../data/dadjoke.json');
module.exports = {
  catagory: 'fun',
  name: 'dadjoke',
  description: 'Get a dadjoke!',
  usage: 'dadjoke',
  execute: async (message, args, client, db, packageInfo, Discord) => {
    args = args.join(" ");
    joke = dadjoke.jokes[Math.floor(Math.random() * dadjoke.jokes.length)];
    if (ids.includes(message.author.id)) {
      const embed = new Discord.MessageEmbed()
        .setColor(7506394)
        .addField("<:logo:744624310294937672> " + message.author.username + " (BOT OWNER) | Here Is A Dadjoke!", joke)
        .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);
      message.channel.send(embed);
      message.delete();
    }
    else{
    const embed = new Discord.MessageEmbed()
      .addField(message.author.username + " | Here Is A Dadjoke!", joke)
      .setFooter(`© Brandgrand!bot Made by Brandgrand!real`);
    message.channel.send(embed);}
  }

};